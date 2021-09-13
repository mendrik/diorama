export type Milliseconds = number

export interface Node {
  x: number
  y: number
  width: number
  height: number
  aspectRatio?: number
  dummy?: boolean
  index?: number
}

interface MinMax {
  min: number
  max: number
}

const shuffle = <T>(array: T[]) => {
  let currentIndex: number = array.length,
    temporaryValue: T,
    randomIndex: number,
    floor = Math.floor,
    rnd = Math.random

  while (0 !== currentIndex) {
    randomIndex = floor(rnd() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const nextPowerOfTwo = (v: number) => {
  v--
  v |= v >> 1
  v |= v >> 2
  v |= v >> 4
  v |= v >> 8
  v |= v >> 16
  v |= v >> 32
  v++
  return v
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const arrayReplaceIn = <T>(src: T[], target: T[]) => {
  for (let i = 0; i < src.length; i++) {
    target[i] = src[i]
  }
}

const shuffleSlice = <T>(arr: T[], start: number, end: number) => {
  let shuffled = shuffle(arr.slice(start, end))
  return arrayReplaceIn(shuffled, arr)
}

const dummyArray = (len: number): Node[] =>
  Array.apply(null, Array(len)).map(
    () =>
      ({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        aspectRatio: 0,
        dummy: true
      } as Node)
  )

const calculateSizes = (nodes: Node[], splits: number, nextPower: number, minmax: MinMax) => {
  let n1,
    n2,
    parent,
    minFn = Math.min,
    maxFn = Math.max,
    d
  for (let i = nextPower - 2; i >= 0; i--) {
    d = i << 1
    n1 = nodes[d]
    n2 = nodes[d + 1]
    parent = nodes[nextPower + i]
    n1.x = parent.x
    n1.y = parent.y
    if (splits & (1 << i)) {
      n1.width = parent.width
      n1.height = n1.aspectRatio ? parent.width / n1.aspectRatio : 0
      n2.x = parent.x
      n2.y = parent.y + n1.height
      n2.width = parent.width
      n2.height = parent.height - n1.height
    } else {
      n1.width = parent.height * n1.aspectRatio
      n1.height = parent.height
      n2.x = parent.x + n1.width
      n2.y = parent.y
      n2.width = parent.width - n1.width
      n2.height = parent.height
    }
    if (d < nextPower) {
      let d1 = n1.width + n1.height,
        d2 = n2.width + n2.height
      if (!n1.dummy) {
        minmax.min = minFn(minmax.min, d1)
      }
      if (!n2.dummy) {
        minmax.min = minFn(minmax.min, d2)
      }
      minmax.max = maxFn(minmax.max, d1, d2)
    }
  }
}

/**
 * The core of the layout algorithm
 * @param width canvas width
 * @param height canvas height
 * @param aspectRatios array of aspect ratios of your image set
 * @param searchTime limits the amount of time the algorithm has to find a good solution
 */
export const searchSolution = (
  width: number,
  height: number,
  aspectRatios: number[],
  searchTime: Milliseconds
): Node[] => {
  const BIG = 999999999

  let targetRatio = width / height,
    nextPower = nextPowerOfTwo(aspectRatios.length),
    fullArray = dummyArray((nextPower << 1) - 1),
    splitCache = {},
    endTime = new Date().getTime() + searchTime,
    previousMinScore = BIG,
    splits: number,
    currentDifference: number,
    winner: Node[],
    arrayHalf: number,
    wider: boolean,
    minmax: MinMax,
    a1,
    a2,
    a,
    i,
    l,
    last,
    d,
    minAspectRatioThreshold = 0.05,
    nodes = aspectRatios.map((r, idx) => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      index: idx,
      aspectRatio: r,
      dummy: false
    }))

  if (nextPower <= 5) {
    minAspectRatioThreshold = BIG
  }
  const allowCropping = true

  arrayReplaceIn(nodes, fullArray)
  arrayHalf = 1 << nextPower
  while (Date.now() < endTime) {
    splits = getRandomInt(0, arrayHalf)
    if (splitCache[splits]) {
      continue
    }
    splitCache[splits] = true
    shuffleSlice(fullArray, 0, nextPower)
    for (i = 0, l = nextPower - 1; i < l; i++) {
      d = i << 1
      a1 = fullArray[d].aspectRatio
      a2 = fullArray[d + 1].aspectRatio
      if (a1 !== 0 && a2 !== 0) {
        a = a1 + a2
        if (splits & (1 << i)) {
          a = (a1 * a2) / a
        }
      } else {
        a = a1 || a2
      }
      fullArray[i + nextPower].aspectRatio = a
    }
    wider = targetRatio > a
    currentDifference = wider ? -1 + targetRatio / a : 1 - targetRatio / a
    if (currentDifference < minAspectRatioThreshold) {
      last = fullArray[fullArray.length - 1]
      last.width = wider ? height * a : width
      last.height = wider ? height : width / a
      minmax = {
        min: BIG,
        max: -BIG
      } as MinMax
      calculateSizes(fullArray, splits, nextPower, minmax)
      let score = currentDifference + (1 - minmax.min / minmax.max)
      if (score < previousMinScore) {
        previousMinScore = score
        let arr = fullArray.slice(0, nextPower).filter(n => !n.dummy)
        winner = arr.map(n => ({
          x: n.x,
          y: n.y,
          index: n.index,
          width: n.width,
          height: n.height
        }))
        if (allowCropping) {
          let scaleX = width / last.width
          let scaleY = height / last.height
          winner = winner.map(n => ({
            x: n.x * scaleX,
            y: n.y * scaleY,
            index: n.index,
            width: n.width * scaleX,
            height: n.height * scaleY
          }))
        }
      }
    }
  }
  return winner
}

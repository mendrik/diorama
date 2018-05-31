import {images} from './images'
import {h, render} from 'preact'
import {Diorama} from './diorama'

const domReady = () => {
    return new Promise((resolve) => {
        document.addEventListener('DOMContentLoaded', () => {
            resolve()
        })
    })
}

export interface ImageWithRatio {
    src: string,
    aspectRatio: number
}

const imageLoader = (src: string): Promise<ImageWithRatio> => {
    return new Promise<ImageWithRatio>((resolve) => {
        const img = new Image()
        img.addEventListener('load', () => {
            resolve({
                src,
                aspectRatio: img.width / img.height
            })
        })
        img.src = src
    })
}

(async () => {
    const [loaded, ...imgWithRatios] = await Promise.all([domReady as any, ...images.map(imageLoader)])
    render(<Diorama images={imgWithRatios}/>, document.body)
})()

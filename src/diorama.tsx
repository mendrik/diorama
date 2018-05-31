import {Component, h} from 'preact'
import {ImageWithRatio} from './start'
import {Tile, TileProps} from './tile'
import screenfull from 'screenfull'
import {searchSolution} from './layout'
import './diorama.css'

export interface DioramaProps {
    images: ImageWithRatio[]
}

export interface DioramaState {
    showCrop: boolean
    tileProps?: TileProps[]
    images: number
}

export class Diorama extends Component<DioramaProps, DioramaState> {

    resizing = false

    constructor(props) {
        super(props)
        this.state = {
            showCrop: false,
            tileProps: [],
            images: 6
        }
    }

    componentDidMount() {
        this.calculatePositions()
        window.addEventListener('resize', () => this.calculatePositions())
    }
    /*

        tiles: Tile[] = []
        resizing = false

        init(el: Element) {
            singleton = this;
            render(this, el)
        }

        addImages(urls: string[]) {
            this.tiles.push.apply(this.tiles, urls.map(url => new Tile(url)))
        }

        @Subscribe('tile-loaded')
        tileLoaded() {
            let loadedTiles = this.tiles.reduce((p, c) => p + (c.aspectRatio ? 1 : 0), 0)
            if (loadedTiles === this.tiles.length) {
                this.calculatePositions()
                this.resizing = false
            }
        }

        @On({event: 'click', selector: 'button.calc'})
        recalc() {
            this.calculatePositions()
        }

        @On({event: 'click', selector: 'button.add-image'})
        add() {
            if (this.tiles.length < images.length) {
                this.tiles.push(new Tile(images[this.tiles.length]))
            }
        }

        @On({event: 'click', selector: 'button.del-image'})
        del() {
            if (this.tiles.length > 5 && !this.resizing) {
                this.tiles.pop()
                this.calculatePositions()
            }
        }

        @On({event: 'click', selector: 'button.crop-toggle'})
        showCrop() {
            this.element.classList.toggle('crop')
        }

        @On({event: 'click', selector: 'button.fullscreen'})
    */



    calculatePositions() {
        if (this.resizing) {
            return;
        }
        this.resizing = true
        let w         = this.base.clientWidth,
            h         = this.base.clientHeight,
            tiles     = this.props.images.slice(0, this.state.images),
            positions = []
        do {
            positions = searchSolution(w, h, tiles.map(tile => tile.aspectRatio), 100)
        } while (!positions)
        requestAnimationFrame(() => {
            this.setState({
                tileProps: positions.sort((a, b) => a.index - b.index).map(p => ({
                    src: this.props.images[p.index].src,
                    aspectRatio: this.props.images[p.index].aspectRatio,
                    top: p.y,
                    left: p.x,
                    width: p.width,
                    height: p.height
                }))
            })
            this.resizing = false
            this.forceUpdate()
        })
    }

    shouldComponentUpdate() {
        return false
    }

    crop = () => {
        this.setState({showCrop: !this.state.showCrop})
        this.forceUpdate()
    }

    recalc = () => {
        this.calculatePositions()
    }

    add = () => {
        this.setState({images: Math.min(this.props.images.length, this.state.images + 1)})
        this.calculatePositions()
    }

    remove = () => {
        this.setState({images: Math.max(5, this.state.images - 1)})
        this.calculatePositions()
    }

    render(props, {tileProps, showCrop, images, ...state}) {
        return (
        <div className={`diorama ${showCrop ? 'crop' : ''}`}>
            <ul>{tileProps.map(props => <Tile {...props}/>)}</ul>
            <nav>
                <button class="calc" onClick={() => this.recalc()}>Recalculate</button>
                <button class="crop-toggle" onClick={() => this.crop()}>Show crop</button>
                <button class="fullscreen" onClick={() => screenfull.toggle()}>Fullscreen</button>
                <button class="add-image" onClick={() => this.add()}>Add</button>
                <button class="del-image" onClick={() => this.remove()}>Remove</button>
            </nav>
        </div>)
    }

}
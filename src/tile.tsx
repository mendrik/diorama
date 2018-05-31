import {h, Component} from 'preact'

export interface TileProps {
    src: string
    aspectRatio: number
    top: number
    left: number
    width: number
    height: number
}

export class Tile extends Component<TileProps> {

    render({src, aspectRatio, top, left, width, height}) {
        const style = {
            top,
            left,
            width,
            height,
            backgroundImage: `url(./${src})`
        }
        return <li style={style}/>
    }
}

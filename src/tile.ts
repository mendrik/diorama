module diorama {

    import Widget = feather.core.Widget
    import Template = feather.annotations.Template
    import Construct = feather.annotations.Construct;
    import Bind = feather.observe.Bind;

    export class Tile extends Widget {

        src: string

        @Bind() aspectRatio: number
        @Bind() style = false
        top: number
        left: number
        width: number
        height: number

        constructor(src: string) {
            super()
            this.src = src
        }

        init(element: HTMLElement) {
            let img = new Image()
            img.addEventListener('load', () => {
                this.aspectRatio = img.width / img.height
                this.triggerUp('tile-loaded')
            })
            img.src = this.src
        }

        calculateStyle() {
            return feather.strings.format(`background-image:url({{src}});top:{{top}}px;left:{{left}}px;width:{{width}}px;height:{{height}}px;`, this)
        }

        @Template('default')
        getTemplate() {
            return (`<li style="{{style:calculateStyle}}"></li>`)
        }
    }
}

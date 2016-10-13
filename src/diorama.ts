module diorama {

    import Widget = feather.core.Widget
    import Template = feather.annotations.Template
    import Construct = feather.annotations.Construct
    import Tile = diorama.Tile
    import Bind = feather.observe.Bind
    import Subscribe = feather.hub.Subscribe
    import On = feather.event.On
    import Scope = feather.event.Scope
    import Debounce = feather.timings.Debounce

    export let singleton: Diorama
    export let images: string[] = []

    @Construct({selector: '.diorama'})
    export class Diorama extends Widget {

        @Bind({templateName: 'default'})
        tiles: Tile[] = []
        resizing = false

        init() {
            singleton = this;
            this.render('default')
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
        fullscreen() {
            let sf = window['screenfull']
            if (!!sf) {
                sf.toggle()
            }
        }

        @Template('default')
        getTemplate() {
            return (`
                <ul {{tiles}}></ul>
                <nav>
                    <button class="calc">Recalculate</button>
                    <button class="crop-toggle">Show crop</button>
                    <button class="fullscreen">Fullscreen</button>
                    <button class="add-image">Add</button>
                    <button class="del-image">Remove</button>
                </nav>
            `)
        }

        @On({event: 'resize', scope: Scope.Window})
        @Debounce(50)
        calculatePositions() {
            if (this.resizing) {
                return;
            }
            this.resizing = true
            let w           = this.element.clientWidth,
                h           = this.element.clientHeight,
                tiles       = this.tiles,
                tile,
                positions   = diorama.searchSolution(w, h, tiles.map(tile => tile.aspectRatio), 300)
            while (!positions) {
                positions   = diorama.searchSolution(w, h, tiles.map(tile => tile.aspectRatio), 100)
            }
            requestAnimationFrame(() => {
                positions.forEach(p => {
                    tile    = tiles[p.index]
                    tile.top    = p.y
                    tile.left   = p.x
                    tile.width  = p.width
                    tile.height = p.height
                    tile.style  = !tile.style
                })
                this.resizing = false
            })
        }
    }

    export function start(...imgs: string[]) {
        feather.start()
        images = imgs
        singleton.addImages(images.slice(0, 8))
    }
}

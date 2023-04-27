//Comp.render.tsx
import type BarComponent from './bar'
import Style from './style.css'

export default function render(this: BarComponent) {
    return <div class={Style.root} onClick={this.onClick}>
        {this.counter}
    </div>
}
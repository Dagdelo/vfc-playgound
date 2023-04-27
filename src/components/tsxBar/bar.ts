//Comp.ts
import {
    Component,
    Base,
} from 'vue-facing-decorator'

import render from './bar'

@Component({
    render
})
export default class BarComponent extends Base {
    counter = 1

    onClick() {
        this.counter++
    }
}
import componentO from '*.vue'
import { ComponentOptions } from 'vue'

declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
import DefaultTheme from "../../../src/theme/theme-dumi"
import { EnhanceAppContext } from "vitepress-custom"
import CodeDemo from "../../../src/theme/code-demo/CodeDemo.vue"
export default {
    ...DefaultTheme,
    enhanceApp:function (ctx:EnhanceAppContext) {
        const { app } = ctx
        app.component('demo',CodeDemo);
    }
}
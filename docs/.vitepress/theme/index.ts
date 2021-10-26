import DefaultTheme from "../../../dist/theme/theme-dumi"
import { EnhanceAppContext } from "vitepress-custom"
import { CodeDemo } from "../../../dist/theme/code-demo"
export default {
    ...DefaultTheme,
    enhanceApp:function (ctx:EnhanceAppContext) {
        const { app } = ctx
        app.component('demo',CodeDemo);
    }
}
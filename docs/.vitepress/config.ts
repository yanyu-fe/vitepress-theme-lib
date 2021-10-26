import { defineConfig } from "vitepress-custom"

// @ts-ignore
import MarkdownIt from "markdown-it"

export default defineConfig({
    title:"测试",
    markdown:{
        // config:(md:MarkdownIt)=>{
        //     // get file path
        // }
    },
    vite:{
        resolve:{}
    }
})
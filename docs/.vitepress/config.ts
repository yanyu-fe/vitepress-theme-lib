import { defineConfig } from "vitepress-custom"

import { CodePlugin } from "../../src/theme/code-demo"

// @ts-ignore
import MarkdownIt from "markdown-it"

export default defineConfig({
    title:"测试",
    markdown:{
        config: (md:MarkdownIt) => {
            // get file path
            CodePlugin(md);
        }
    },
    vite:{
        resolve:{}
    }
})
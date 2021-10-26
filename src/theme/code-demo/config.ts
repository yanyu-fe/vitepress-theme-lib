import {PropType} from "vue";

export interface CodeDemoProps {
    // 要被拷贝的数据
    copySource?:PropType<string>
    // 标题支持插槽
    title?:PropType<string>
    // 描述支持插槽
    desc?:PropType<string>
    // 显示的代码
    code?:PropType<string>
}
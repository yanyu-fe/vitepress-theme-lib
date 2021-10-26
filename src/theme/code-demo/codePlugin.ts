import MarkdownIt from "markdown-it";

const checkIsCustomDemo = (target:string,tag="demo") =>{
    // 生成正则表达式
    const pat:RegExp = new RegExp(`^<${tag}(.*?)>(.*)<.*\/.*${tag}>$`,"gis");
    const pat1:RegExp = new RegExp(`^<${tag}(.*?)>(.*)\n$`,"gis");
    const data = pat.exec(target)
    const data1 = pat1.exec(target);
    console.log(data1);
    console.log(data);
    if (data){
        // 处理数据，不存在的情况下如何处理数据
    }
    return false;
}


export const CodePlugin = (md:MarkdownIt,demoTag="demo") => {
    // 获取所有需要操作的参数
    md.renderer.rules.html_block = function (tokens,idx,options,env) {
        const token = tokens[idx];
        const content = token.content;
        // const { file } = env;
        if (checkIsCustomDemo(content)){
            // 当前符合目标选项
            // console.log(file);
            // console.log(token, file, content);
        }
        return "";
    }
}

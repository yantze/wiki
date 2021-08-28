# 如何写一个简单的 React 组件项目

最近要为一个新项目写一个组件，发现现在要发布 Typescript+React+Less 或者 Scss 组件没什么成型的编译构建方法。如果用 webpack 就太麻烦并且编译出来的产物默认是一个 js 文件，类型声明还要用 tsc 生成。

其实很简单的，宿主项目要的类型声明和原始的样式，能通过 import 获取部分组件的代码，那就简单的用 tsc 编译到产物目录 lib 中，并且把对应的其它资源拷贝过去就好了。

而这篇文章有讲怎么拷贝第三方的资源 https://vccolombo.github.io/blog/tsc-how-to-copy-non-typescript-files-when-building/

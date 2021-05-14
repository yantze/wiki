# Calibre

## e-book view theme
solarized light theme
```css
body {
    font-family: PingFangSC, "simsun", "Hiragino Sans GB", "TIBch", "Classic Grotesque W01","Helvetica Neue", Arial, "STHeiti", "Microsoft YaHei", "WenQuanYi Micro Hei", SimSun, sans-serif !important;
    font-size: 1.1em;
    text-align:justify;
    text-indent:2em;
    line-height: 1.8em !important;

    margin-top:0px;
    margin-bottom:4px;
    margin-right:50px;
    margin-left:50px;


    /* color:rgb(96,62,36); */
    color:rgb(96,62,36);
    /* background-color: rgb(250,244, 233); */
    background-color: rgb(250,244, 233);
}

h1, h2, h3, h4, h5, h6 {
    color:black;
    font-weight:bold;
}

::selection {
    background: rgb(228,228,228);
}
```

## 把 TXT 文档转换成带目录的 MOBI 格式电子书

- 转换为正确的 utf8 格式
- 使用正则替换 "^(\s+|)第(.*)章"，转换为 "### 第$2章"
- 如果有什么卷，就转换为 ## 第$2卷
- 导入 Calibre ，选择 转换书籍 → 逐个转换
- 把右上角的"输出格式"选成"MOBI"，然后点击左栏的"内容目录"标签，找到"一级目录"这一项，填入 //h:h3（也可以点击后面的魔术棒小图标，在弹出的窗口中选择 h3）

tips: 替换使用 VSCode 会马上看到差别， Vim 写的正则有点不直观。

或者用结构检测：
```
//*[re:test(., "^\s*[第卷][0123456789一二三四五六七八九十零〇百千两]*[章回部节集卷].*", "i")]
```

## DRM
Remove DRM tool: https://github.com/apprenticeharper/DeDRM_tools


## Reference
- https://bookfere.com/post/82.html

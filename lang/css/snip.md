字体
```css
font-family: Georgia, "Times New Roman", 'Helvetica Neue', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', YaHei", "微软雅黑", STXihei, "华文细黑", serif;
font: 100%/1.5 "Segoe UI", "Century Gothic", Arial, "Microsoft YaHei",Sans-Serif;
```

颜色
```css
rgb:232 230 229 #e8e635  白色  // 当背景色很不错  
```

兼容主流浏览器的渐变
```css
#main
{
    height:512px;
    text-align: center;
    line-height: 80px;
    margin-bottom: 10px;
    color: White;
    font-size: 20px;
    filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr='#FF0000',endColorStr='#F9F900',gradientType='0');
    background: -moz-linear-gradient(top, #FF0000, #F9F900);
    background: -o-linear-gradient(top,#FF0000, #F9F900);
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FF0000), to(#F9F900));
    background: -ms-linear-gradient(top, #FF000, #F9F900);
}
```

网站所有东西都变灰色
```css
html { 
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix'  values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscalerayscale");
    filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); zoom: 1;}
```


Measurement Values
```
| Unit  | Description |
| ----- | ----------- |
| % | percentage |
| in | inch |
| cm | centimeter |
| mm | millimeter |
| em | 1em is equal to the current font size. 2em means 2 times the size of the current font. E.g., if an element is displayed with a font of 12 pt, then '2em' is 24 pt. The 'em' is a very useful unit in CSS, since it can adapt automatically to the font that the reader uses |
| ex | one ex is the x-height of a font (x-height is usually about half the font-size) |
| pt | point (1 pt is the same as 1/72 inch) |
| pc | pica (1 pc is the same as 12 points) |
| px | pixels (a dot on the computer screen) |
```
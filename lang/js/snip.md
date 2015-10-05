//可以获取当前页面的密码
```javascript
$(document).ready(function(){
    $("body").append('<input id="getpwd" type="button" value="Get PWD!"/>');
    $("#getpwd").click(function(){
            alert($("input[type=password]").val());
    });
});
```
一种语法糖
```javascript
$.fn.coffee = function(obj){
  for(var eName in obj)
    for(var selector in obj[eName])
      $(this).on(eName, selector, obj[eName][selector]);
}
```

喜欢这种结构吗？

    1. 清晰明了的文档结构
    2. 运用事件冒泡，有效减少内存的占用
    3. 第一级别用事件名称来划分
    4. 第二级别的属性名相当于选择符。


//eg.
```javascript
$('.action-box').coffee({
  click: {
    '#btn-add': function(){
      //do something    },
    //这是是支持jQuery的':last / [attr] / :eq(0)'等方法的 
    '#btn-delete': function(){
      //do something    }
  },
  mouseenter: {
    '#btn-sort': function(){
      //do something    }
  }
});
```


添加js代码到html
```javascript
javascript: void(( function() { 
      var element = document.createElement('script');
      element.charset = 'utf-8',element.setAttribute('src', 'http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js');
    document.body.appendChild(element); 
    })())
```



修改网页内容
```javascript
javascript: void(( function() {document.getElementsByName("buildingId")[0].setAttribute('onchange',"document.getElementsByName('buildingName')[0].value=document.loginForm.buildingId.options[document.loginForm.buildingId.selectedIndex].text"); })()) 
```


防止javascriptcdn加载失败
```html
<script src="//upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.3.min.js"></script>
<script type="text/javascript">
//<![CDATA[
if (typeof jQuery == 'undefined') {
  document.write(unescape("%3Cscript src='/js/jquery-2.1.1.min.js'%3E%3C/script%3E")); 
}
// ]]>
</script>
```

修改地址栏
```javascript
var stateObject = {};
var title = "Wow Title";
var newUrl = "/my/awesome/url";
history.pushState(stateObject,title,newUrl);
history.pushState({},'','/yantze');
```

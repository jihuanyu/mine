# HTML5 篇

## 1. html5 的新特性

    文件类型声明(<!DOCTYPE>) 仅有一型: <!DOCTYPE HTML>

    新的解析顺序：不再基于 SGML

    绘画 canvas

    用于媒介回访的 video 和 audio 元素

    语义化更好的内容元素：article、footer、header、nav、section

    表单控件：calendar、date、time、email、url、search

    input元素的新类型：date、email、url等

    新的技术：webworker、websocket、Geolocation

    新的属性：ping(用于a与area),charset(用于meta),async(用于script)

    全域属性：id、tabindex、repeat

    新的全域属性：contenteditable,contextmenu,draggable,dropzone,hidden,spellcheck

    信应用程序接口：HTML Geolocation、HTML Drag and Drop、HTML Local Storage、HTML Application Cache、HTML Web Workers、HTML SSE、HTML Canvas/WebGL、HTML Audio/Video

    纯表现的元素:basefont,big,center,font,s,strike,tt,u

    对可用性产生负面影响的元素：frame,frameset,naframes

## 2. 什么是 Retina 显示屏，带来了什么问题？

    retina：一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由1个变为多个，如在同样带下的屏幕上，苹果设备的retina显示屏中，像素点1个变为4个

    在高清显示屏中的位图被放大，图片会变得模糊，因此移动端的视觉稿通常会设计为传统PC的2倍

    那么，前端对应方案是：
    设计稿切出来的图片长宽保证为偶数，并使用background-size把图片缩小为原来的1/2

    例如图片宽高为：200px*200px，那么写法如下
    .css{windth:100px;height:100px;background-size:100px 100px;}

    其它元素的取值为原来的1/2，例如视觉稿40px的字体，使用样式的写法为20px
    .css{font-size:20px}

## 3.ios 系统中元素被触摸时产生的半透明遮罩怎么去掉？

    ios用户点击一个连接，会出现一个半透明灰色遮罩，如果想要禁用，可设置-webkit-tap-highlight-color的alpha值为0，也就是属性值的最后一位设置为0就可以去除半透明灰色遮罩

    a,button,input,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}

## 4.部分 Android 系统中元素被点击时产生的边框怎么去掉？

    Android用户点击出现一个连接，会出现一个边框或者半透明灰色遮罩，不同生产商定义出来的效果不一样，可设置-webkit-tap-highlight-color的alpha值为0去除部分机器自带的效果

    a,button,input,textarea{
        -webkit-tap-highlight-color:rgba(0,0,0,0)
        -webkit-user-modify:read-write-plaintext-only
    }

    -webkit-user-modify有个副作用，就是输入法不再能够输入多个字符串，宁外，有些机器去除不了，如小米2

    对于按钮类还有个办法，不使用a或者input标签，直接用div标签

## 5.webkit 表单元素的默认外观怎么重置？

    通用
    .css{-webkit-appearance:none}

    伪元素改变number类型input框的默认样式

    input[type=number]
    ::-webkit-textfield-decoration-container{
        background-color:transparent
    }

    input[type=number]
    ::-webkit-inner-spin-button{
        -webkit-appearance:none
    }

    input[type=number]
    ::-webkit-outer-spin-button{
        -webkit-appearance:none
    }

## 6.webkit 表单输入框 placeholder 的颜色值能改变吗？

    input
    ::-webkit-input-placeholder{
        color:#AAAAAA
    }

    input:focus
    ::-webkit-input-placeholder{
        color:#EEEEEE
    }

## 7.禁止 ios 长按时不触发系统的菜单，禁止 ios&android 长按时下载图片

    .css{
        -webkit-touch-callout:none
    }

## 8.禁止 ios 和 android 用户选中文字

    .css{
        -webkit-user-select:none
    }

## 9. 打电话发短信写邮件怎么实现

    打电话： <a href="tel:0755-10086">打电话：0755-10086</a>

    发短信：winphone无效
            <a href="sms:10086">发短信给：10086</a>

    写邮件：<a href="mailto:peun@foxmail.com">peun@foxmail.com</a>

## 10.audio 元素和 video 元素在 ios 和 android 中中无法自动播放

    应对方案：触屏即播
    $('html').one('touchstart',function(){
        audio.play()
    })

## 11.闪屏怎么解决

    通过transform的3d属性该去硬件加速可以解决闪屏问题

    开启硬件加速
    1.解决页面闪白
    2.保证动画流畅
    .css{
        -webkit-transform:translate3d(0,0,0)
        -moz-transform:translate(0,0,0)
        -ms-transform:translate3d(0,0,0)
        transform:translate3d(0,0,0)
    }

## 12.取消 input 在 ios 下，输入的时候英文首字母的默认大写

    <input autocapitaliza='off' autocorrect='off' />

## 13.Android 上面去掉语音输入按钮

    input
    ::-webkit-input-speech-button{
        display:none
    }

## 14.设计高性能 CSS3 动画的几个要素

    尽可能地使用合成属性transform和opacity来设计CSS3动画
    不使用position的left和top来定位
    利用translate3D开启GPU加速

## 15.fixed bug

    ios下fixed元素容易定位出错，软键盘弹出时，影响fixed元素定位
    android下fixed表现要比ios更好，软键盘弹出时，不会影响fixed元素定位ios4下不支持position：fixed
    解决方案
    可用isroll.js，暂无完美方案

## 16.移动 H5 前端性能优化指南

    1.PC优化手段在Mobile侧同样适用

    2.在Mobile侧我们提出三秒钟渲染完成首屏指标

    3.基于第二点，首屏加载3秒完成或使用Loading

    4基于联通3G网络平均338KB/s(2.71Mb/s)，所以首屏资源不应超过1014KB

    5.Mobile侧因手机配置原因，除加载外渲染速度也是优化重点

    6.基于第五点，要合理处理代码减少渲染损耗

    7.基于第二点、第五点，所有影响首屏加载和渲染的代码应在处理逻辑中后置

    8.加载完成后用户交互使用时也需注意性能

## 优化指南

> [加载优化]
> 加载过程时最为耗时的过程，可能会占到总耗时 80%时间，因此是优化的重点

1. 减少 HTTP 请求

```
    因为手机浏览器同时响应请求为 4 个请求(Android 支持 4 个，ios5 后可以支持 6 个)，所以要尽量减少页面的请求数，首次加载同时请求数不能超过 4 个

    a)合并 CSS、JavaScript
    b)合并小图片，使用雪碧图
```

2. 缓存

```
    使用缓存可以减少向服务器的请求数，节省加载时间，所以所有静态资源都要在服务器端设置缓存，并且尽量使用长 Cache(长 Cache 资源的更新可使用时间戳)

    a)缓存一切可缓存的资源
    b)使用长 Cache(使用时间戳更新 Cache)
    c)使用外联式引入 CSS、JavaScript
```

3. 压缩 HTML、CSS、JavaScript

```
    减少资源大小可以加快网页显示速度，所以要对 HTML、CSS、JavaScript 等进行代码压缩，并在服务器端设置 GZip

    a)压缩(例如，多余的空格，换行符和缩进)
    b)启用 GZip
```

4. 无阻塞

```
    写在 HTML 头部的 JavaScript(无异步)，和写在 HTML 标签中的 Style 会阻塞页面的渲染，因此 CSS 放在页面头部并使用 Link 方式引入，避免在 HTML 标签中写 Style，JavaScript 放在页面尾部或使用异步方式加载
```

5. 使用首屏加载

```
    首屏的快速显示，可以大大提升用户对页面速度的感知，因此应尽量针对首屏的快速显示做优化
```

6. 按需加载

```
    将不影响首屏的资源和当前屏幕资源不用的资源放到用户需要时才加载，可以大大提升重要资源的显示速度和降低总体流量

    PS：按需加载会导致大量重绘，影响渲染性能

    a)LazyLoad
    b)滚屏加载
    c)通过 Media Query 加载
```

7. 预加载

```
    大型重资源页面(如游戏)，可使用增加 Loading 的方法，资源加载完成后再显示页面。但 Loading 时间过长，会造成用户流失

    对用户行为分析可以在当前页加载下一页资源，提升速度

    a)可感知 Loading(如进入空间游戏的 Loading)
    b)不可感知的 Loading(如提前加载下一页)
```

8. 压缩图片

```
    图片时最占流量的资源，因此尽量避免使用他，使用时选择最合适的格式(实现需求的前提下，以大小判断)，合适的大小，然后使用智图压缩，同时再代码中用 Srcset 来按需显示

    PS：过度压缩图片大小影响图片显示效果

    a)使用智图(http://zhitu.isux.us)
    b)使用其它方式代替图片(1.使用 CSS3 2.使用 SVG3.使用 IconFont)
    c)使用 Srcset
    d)选择合适的图片(1.webP 由于 JPG2.PNG8 由于 GIF)
    e)选择合适的大小(1.首次加载不大于 1014KB 2.不宽于 640(基于手机屏幕一般宽度))
```

9. 减少 Cooike

```
    Cookie 会影响加载速度，所以静态资源域名不使用 Cookie
```

10. 避免重定向

```
    重定向会影响加载速度，所以在服务器正确设置避免重定向
```

11. 异步加载第三方资源

```
    第三方资源不可控会影响页面的加载和显示，因此要异步加载第三方资源
```

> [脚本执行优化]
> 脚本处理不当会阻塞页面加载、渲染，因此在使用时需当注意

1. CSS 写在头部，JavaScript 卸载尾部或异步

2. 避免图片和 iFrame 等的空 Src

```
    空Src会重新加载当前页面，影响速度和效率
```

3. 尽量避免重设图片大小

```
    重设图片大小是指在页面、CSS、JavaScript等中多次重置图片大小，，多次重设图片大小会引发图片的多次重绘，影响性能
```

4. 图片尽量避免使用 DataURL

```
    DataURL图片没有使用图片的压缩算法文件会变大，并且要解码后再渲染，加载慢耗时长
```

> [CSS 优化]

1. 尽量避免写在 HTML 标签中写 Style 属性

2. 避免 CSS 表达式

```
    CSS表达式的执行需跳出CSS树的渲染，因此请避免CSS表达式
```

3. 移除空的 CSS 规则

```
    空的CSS规则增加了CSS文件的大小，且影响CSS树的执行，所以需移除空的CSS规则
```

4. 正确使用 Display 的属性

```
    Display属性会影响页面的渲染，因此请合理使用

    a)display:inline后不应该再使用width、height、margin、padding以及float
    b)display:inline-block后不应该再使用float
    c)display:block后不应该再使用vertical-align
    d)display:table-*后不应该再使用margin或者float
```

5. 不滥用 Float

```
    Float在渲染时计算量比较大，尽量减少使用
```

6. 不滥用 Web 字体

```
    Web字体需要下载，解析，重绘当前页面，尽量减少使用
```

7. 不声明过多的 Font-size

```
    过多的Font-size引发CSS树的效率
```

8. 值为 0 时不需要任何单位

```
    为了浏览器的兼容性和性能，值为0时不要带任何单位
```

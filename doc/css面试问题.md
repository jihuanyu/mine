# CSS 问题

## 1.flex 布局

```
    - display:flex; 在父元素设置，子元素受弹性盒影响，默认排成一排，如果超出一行，按比例压缩。

    - flex:1;子元素设置，设置子元素如何分配父元素的空间，子元素宽度占满整个父元素。

    - align-items:center;定义子元素在父元素容器中的对齐方式，center垂直居中。

    - justify-content:center;设置子元素在父元素中居中，前提是子元素没有把父元素占满，让子元素水平居中。
```

---

## 2. css3 的新特性

```
    - transition transition-property 规定设置过渡效果的css属性的名称。

    - transition-duration 规定完成过度效果需要多少秒或毫秒。

    - transition-timing-function 规定速度效果的速度曲线。

    - transition-delay 定义过渡效果何时开始。

    - animation 属性可以向Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。

    - animation 实现动画效果主要分为两部分：
      （1）通过类似Flash动画中的帧来声明一个动画
      （2）在animation属性中调用关键帧声明的动画
```

---

## 3. img 中 alt 和 title 的区别

```
    - 图片中的alt属性是在图片不能正常显示的时候出现的文本提示，alt有利于SEO的优化。

    - 图片中的title属性是在鼠标移至元素上的文本提示。
```

---

## 4. 用纯 CSS 创建一个三角形

```
    {
        width: 0;
        height: 0;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
        border-right: 40px solid transparent;
        border-bottom: 40px solid #ff0000;
    }
```

---

## 5. 如何理解 CSS 的盒子模型？

```
    - 标准盒子模型：宽度=content+border+padding+margin

    - 低版本IE盒子模型：宽度=content+border+padding
```

---

## 6. 如何让一个 div 水平居中

```
    - 已知宽度，block元素，添加 marigin:0 auto 属性

    - 已知宽度，绝对定位的居中上下左右都为0，margin:auto
```

---

## 7.如何让一个 div 水平垂直居中

```
    div {
        position: relative / fixed; /* 相对定位或绝对定位均可 */
        width:500px;
        height:300px;
        top: 50%;
        left: 50%;
        margin-top:-150px;
        margin-left:-250px;
        外边距为自身宽高的一半 */
        background-color: pink; /* 方便看效果 */
    }

    .container {
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
    }
    .container div {
        width: 100px; /* 可省 */
        height: 100px; /* 可省 */
        background-color: pink; /* 方便看效果 */
    }
```

---

## 8.如何清除浮动？

    - clear清除浮动(添加空div法)在浮动元素的下方添加空div，并给该元素写css样式{clear:both;height:0;overflow:hidden}

    - 给浮动元素父级设置高度

    - 父级同时浮动(需要给父级同级元素添加浮动)

    - 父级设置成inline-block，其margin:0 auto;居中方式失效

    - 给父级添加overflow:hidden 清除浮动方法

    - 万能清除法 after伪类 清浮动 (现在主流方法，推荐使用)

```
float_div:after{
    content:".";
    clear:both;
    display:block;
    height:0;
    overflow:hidden;
    visibility:hidden;
}
.float_div{
    zoom:1
}
```

---

## 9.css3 实现三栏布局，左右固定，中间自适应

    - 圣杯布局/双飞翼布局

---

## 10.display:none 和 visibility: hidden 的区别

    - dispaly:none;隐藏对应元素，在文档布局中不再给它分配空间，它各边元素会合拢，就当它不存在。

    - visibility:hidden;隐藏对应元素，但在文档布局中仍保留原来的空间。

---

## 11.CSS 中 link 和@import 的区别是？

    - link属于HTML标签，而@import是css提供的页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载。

    - @import只在IE5以上才能识别，而link是HTML标签，无兼容问题。

    - link方式的样式的权重，高于@import的权重。

## 13.transition 和 animation 的区别

    - animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要一个触发事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且，transition为2帧，从from...to，而animation可以一帧一帧的。

    - transition规定动画的名字规定完成过渡效果需要多少秒或毫秒规定速度效果定义过渡效果从何开始animation指定要绑定到选择器的关键帧的名称。

---

## 14.CSS 优先级

    不同级别：总结排序：!important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符 > 继承 > 浏览器默认属性
    1.属性后面加!important 会覆盖页面内任何位置定义的元素样式
    2.作为style属性写在元素内的样式
    3.id选择器
    4.类选择器
    5.标签选择器
    6.通配符选择器（*）
    7.浏览器自定义或继承

**同一级别：后写的会覆盖先写的**

**css 选择器的解析原则：选择器定位 DOM 元素是从右往左的方向，这样可以尽早的过滤掉一些不必要的样式规则和元素**

---

## 15.雪碧图

    - 多个图片集成在一张图片中的图
    - 使用雪碧图可以减少网络请求的次数，加快允许速度
    - 通过background-position，去定位图片在屏幕的那哪个位置

---

## 16.使元素消失的方法

    -visibility:hidden、display:none、z-index=-1、opacity：0
    1.opacity：0,该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如click事件也能触发
    2.visibility:hidden,该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
    3.display:node, 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删掉

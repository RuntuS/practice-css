> 本次的荧光边框涉及到弹性盒子布局，过滤器filter，伪类before和after，content等知识，下面将一一补充。


*  实现荧光边框的原理是，设置三个图层，最上面的一层放置文字内容，在下面两个层里设置渐变颜色以及高斯模糊，由于它们被主内容覆盖，所以总体上只呈现出边框外部有颜色。

# flex弹性盒子布局
* 使用flex可轻松对多个块元素进行快速排版。
```css
.out-box{
    display:flex; /*指定该盒子的内部排版为弹性盒子*/
    flex-direction: column; /*缺省是row即横排，这里指定column为竖排*/
    justify-content: space-around; /*弹性内部元素均摊排布于整个盒子中*/
    align-items: center; /*安排元素在纵轴方向上的对齐方式，这个有时用于剧中对齐有奇效。*/
}

```
* 除了上述几种属性，还有flex-wrap,align-content这两种常用用法。
```css
.out-box
    /* .... */
    flex-wrap: wrap ; /*弹性容器为多行，即一行容纳不在的时候，换行； 缺省状态下，可能会溢出。*/
    align-content: flex-start; /*主要是用来修改flex-wrap的行为，规定每行的对齐*/
    /* flex-start 各行向弹性盒容器的中间结束为主堆叠  */
}

```

# 伪类 :before和:after选择器
* 在基准类的同级前面或同级后面增加样式，一般用法如下。
```css
.box:after{
    content: ""; /*之所以写content，是因为如果没有内容，样式不会生效，这里只是借助content来实现一下*/
    /* 一堆样式  */
}
```


# 滤镜 filter

```css
.box:after{
    filter:blur(40px); /*设置高斯模糊，值越大。越模糊*/
}
/* 由于filter含有很多属性，这里不去描述，需要用就去查 */
```
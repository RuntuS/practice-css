> css3 -> animation transform

# 针对本次加载动画的说明
## 关于absolute居中定位问题
* 有个简便的方法可以简单实现元素居中定位。
* 可能想到的是，top: 50%; left:50%; 不就vans了吗？
* 其实不然，**定位的基点不是元素的中心轴，而是元素的边界**，即这里的定位只是元素边界距离左边距50%以及上边距50%。实际效果并不是呈现整体居中。
* 于是使用transform的translate进行进一步调整。如下
```css
.center-box{
    position: absolute;
    top: 50%;
    left: 50%;
    /* 下面是关键 */
    transform: translate(-50%,-50%);
    /* 即以自身为基准，在反向移动自身宽度和高度的百分之50%，这样就可以实现绝对居中 */
}

```

* 本次动画主要涉及的就是两个属性**animation与transform**，下面将简单介绍。

# animation
* animation有六个属性。
    1. **animation-name** -> 指定定义的动画名称，动画的名称是由@keyframe来定义的。
    2. **animation-duration** -> 定义动画过渡时间，这个是必须的，否则动画不会执行。
    3. **animation-delay** -> 动画延迟，这个也是加载动画的实现关键。
    4. animation-timing-function -> 规定速度曲线。它本身是以三次贝塞尔函数来定义的动态速度，但有几个常用的封装好的速度曲线(linear,ease,ease-in,ease-in-out,ease-out)，如果需要自定义，则直接使用cubic-bezier(n,n,n,n)来定义。
    5. animation-iteration-count -> 规定动画播放次数。
    6. animation-direction -> 规定是否应该轮流反向播放动画
```css
.bar{
    animation: loading 1.5s infinite ease-in-out;
    /* 四个属性依次是： 动画名称 、一次动画涉及时间 、 动画循环次数(这里是无限循环)、动画曲线 */
}



/* 下面定义动画：其中可以用百分比来设置在一轮动画的不同阶段动画的表现形式 */
@keyframes loading{
    0%{
       /*  */
    }
    50%{
        /*  */
    }
    100%{
       /*  */
    }
}
```

# transform
* transform是css中最强大变换属性之一。
* 大致分类一下，里面涉及的变换有:
    1. 2D转换 -> translate(x,y)  -> 即以自身为参照进行平移，本次的居中调整有它的身影。
    2. 3D转换 -> translate3d(x,y,z) -> 空间变换
    3. 缩放变换(也分2d和3d) -> scale(x,y) && scale(x,y,z)
    4. 旋转变换(也分2d和3d) -> rotate(angle) && rotate3d(x,y,z,angle)
    5. 倾斜转换 -> skew(x-angle,y-angle)
* 除了这些，还有transform-origin，本次样式变换中用到过。
* 它定义了**变换的基准位置**，由于animation原本就是基于transform进行变换的，所以transform-origin对于animation依然生效。
```css

.bar{
    transform-origin: bottom center;
    /* 表示变换的基准是自身的中心和底部 */
}
```
* 假如说不设置这个属性，则这个动画效果的展开就是从竖条的中间往两侧伸展，而不是从底部向上伸展

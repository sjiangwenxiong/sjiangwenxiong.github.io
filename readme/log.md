visiblity&&opcity
visiblity虽然依旧占着空间，但是却无法点击到，想要看不见却能点击到，可以使用opcity

placeholder的字体设置：
input::-webkit-input-placeholder { /* WebKit browsers*/ 
　　color:#999;font-size:14px;
　　}
input:-moz-placeholder {  /* Mozilla Firefox 4 to 18*/ 
　　color:#999;font-size:14px;
　　}
input::-moz-placeholder {  /* Mozilla Firefox 19+*/ 
　　color:#999;font-size:14px;
　　}
input:-ms-input-placeholder { /* Internet Explorer 10+*/ 
　　color:#999;font-size:14px;
}

17.8.15
给关联数组排序，或者将对象根据某一属性(假设name)的值进行排序
.sort((a,b) => {
	a.name.charCodeAt(0)-bname.charCodeAt(0)
})

17.8.21
vuex储存数据页面刷新时被释放问题
问题：子路由页面若是数据由父路由或其他组件通过vuex传递而来，那刷新页面时，子路由vuex获取而来的数据会被浏览器释放，导致页面失去数据
简单解决：刷新时，直接回到父路由
深入研究：刷新不返回父路由，如何保存数据
探究过程：1、使用window.localStorage取代vuex传递数据
			结论：由于Vue不会自动监听window.localStorage的变化，子父路由切换时需要刷新页面才会调用页面更新，姑且不论不断刷新页面的性能损耗，单是刷新页面时浏览器内存的数据释放便让该页面失去了使用vuex的可能。
		 2、组合使用。vuex返回数据时进行判断，若	localStorage存	在则使用不存在则返回state中	数据。
			结论：同样会受到1中原因的影响，且localStorage为undefined时也会有各种问题，问题复杂度变高，开发困难
最终方案：单使用vuex管理所有的数据传递，localStorage只做保存数据作用。
具体方法：子路由页面依旧由vuex传递的数据渲染，但是在父路由点击相关元素时，不去set vuex的数据，而是把数据存到localStorage中，而后子路由加载时，在created钩子中，获取localStorage数据并将其set到vuex的state中，而后获取state中数据来渲染页面。此时由于数据都刷新以后才set的，就不存在被刷新释放的问题了。

17.8.24
2级路由、3级路由等，每个路由，只要有子路由，就应该拥有一个独立的<router-view>标签，使用时，this.$router所操作的就是本组件独立的路由，切换时，不会刷新父路由，自然也不会调用父路由的钩子函数

17.9.6
发现做过渡动画、过渡效果会导致过渡元素的懒加载出问题，具体为懒加载不会自动加载图片，不进行操作时，图片一直是默认图片，当进行滚动等操作时，才会开始加载图片

17.9.7
发现问题：单页面开发控制路由切换的导航栏问题，页面刷新时，由于url路径没有改变，显示的路由没有改变，但导航栏的actived项却由于刷新、浏览器释放内存而初始化，导致显示的页面和导航信息不一致
最初解决方案：使用localstorage储存active项的下标信息，即保存当前项的active状态
结果：刷新时，导航的active信息被保存，导航和路由信息都没有变化，可以保持一致。但是，页面意外中途关闭时，再打开页面。由于页面刚加载，显示的是默认路由，但导航的active信息任然被保存着，所以导航active状态任然保持着意外关闭前的状态，与路由显示不一致。
最终方案：用sessionStorage来替换localstorage来保存导航的active状态，如此，状态信息会随着页面意外关闭而清空，上述问题完美解决。
结论：sessionStorage和localstorage都十分有用、其应用场景略有不同，在这个效果中获得了深刻的体验

17.9.15
显示遮罩层后，隐藏滚动条
1、显示遮罩层时，隐藏被遮盖的元素，遮罩层消失时，重新显示
2、显示遮罩层时，body溢出隐藏，遮罩层消失时，重新显示
区别，2方法可以完美的记录显示遮罩层时的滚动条位置，1则清空为0

17.9.21
安卓手机，出于流量保护目的，音乐不会自动播放，需要用户交互后才能开始播放
try1、初始audio的src给"",后续再添加src具体内容，而后watch一下src的变化，一旦变化就调用play（）方法。
结果：第一次播放没有问题但是修改src以后没有自动播放
推测原因：src变化到渲染到dom会需要几毫秒或者几十毫秒时间，但是src改变马上就会调用到play（）时间，调用完了才换上新的src成为新的音乐，新的音乐由于安卓的阻止没有自动播放，也没有调用到play时间，所以没有自动播放
解决方案：src的watch函数中，给play事件的调用一个20ms的延迟，最终解决了问题

17.9.30
问题：手机端兼容问题：手机端弹出浮窗、模态框等定位在顶层的模块时，若想隐藏其他模块（背景）的滚动条并禁止其滚动，pc端可直接使用给body一个overflow：hidden属性来解决。但手机端却毫无效果
探究：问题的原因是手机端是基于touch事件的，而pc端是基于click事件的。手机端浮层被touch时，由于冒泡事件，底层也会触发touch事件而可以滚动。所以overflow：hidden并不能禁止手机端页面的滚动，且手机端滑动固定的浮层时，浮层不能，反而背景元素会不断滚动
解决：给整个浮窗一个touchmove事件prevent，在事件中禁止冒泡prevent (e){  e.preventDefault()  }

17.10.9
路由（组件）间钩子函数问题：
从一个路由切换A到另一个路由B，新路由B的created钩子会先于路由A的destroy钩子执行
深扒：路由切换时，切换的2个路由的钩子函数运行顺序
router1-beforeCreate
router1-created
router1-beforeMount
router1-mounted
router2-beforeCreate
router2-created
router2-beforeMount
router1-beforeDestroy
router1-destroyed
router2-mounted

17.10.11
1、npm的使用
当包出现问题或者bug时，可用npm uninstall命令删除包
但是删除有事删除的不完整，因为重新安装以后bug可能还在，出现Missing write access to path的报错，
问题：估计是path路径下的文件出错，而uninstall又没有删除掉
解决：这时可以在C:\Users\Administrator\AppData \Roaming\npm中（或者自己的npm安装路径）中，删除包所对应的整个文件夹，然后重新安装，这时就可以安装到正确的包
2、cordova的使用
关于cordova添加平台的问题，Android sdk等依赖不存在的话，会导致无法build
显而易见的解决方案：缺什么依赖就安装什么依赖
随之而来的问题：Android sdk安装之后，cordova requirement检测依赖，发现Android sdk状态依旧是uninstall
原因：项目添加平台时的Android sdk状态就已经定型，不会随着你安装了Android sdk状态而改变
解决：安装Android sdk后，卸载添加的平台（remove）而后重新添加平台，就可以在cordova requirement中看见所下载的Android sdk版本
3、添加完成以后就是build，会遇到Could not resolve com.android.tools.build:gradle:X.X.X+并peer not authenticated的went
	理解：不能解析gradle:X.X.X+这个gradle插件，插件需要去maven下载,但是下载失败，原因是peer not authenticated，大概是证书不匹配的意思
	解决：既然是证书不匹配那就需要从证书方面下手，登录报错信息提示的maven.com地址，下载证书，添加到JDK_HOME/jre/lib/security，这样java就获取到了证书，基于java的gradle就可以正常下载该网站的内容了

微信小程序
different：(between vue and wxs){
	1、(wx:for vs v-for){
		①都为列表渲染，wx:for渲染的每一项的下标、名称为index，item，也可自行定义，v-for必须定义
		②important：多层列表渲染时，每层的index，item只可以在当前层使用，内层列表不能调用外层渲染的index or item，这点与vue不同，wxs想调用外层的index只能在event里面获取，再根据获取到的index获取外层item
	}
}
17.10.17
1、bindtap与catchtap都可以绑定一个点击事件，但是只有catchtap可以使用hover-stop-propagation来阻止冒泡事件

17.10.18
1、rpx是小程序提供的自适应单位，类似rem，但是可以自适应，更便捷。但是，rpx只有在wxss中才能达到自适应效果，直接写在style里面就成了类似px的固定单位。

17.10.19
1、webpack2+禁用了module.export和import的混用，需要框架是试用module.export输出模块的，这时开发时试用import引入框架就会报错(Cannot assign to read only property 'exports' of object '#<Object>)
解决:将插件，框架最后输出的module.export=someFunction改为export default someFunction就可以正常使用了

17.10.26
1、问题：子元素触发父元素的mouseout事件
描述：项目中给父元素加了mouseover、mouseout事件，但是，鼠标移动到子元素上总会自动触发mouseout事件，使用prevent、stop或者self修饰符都没什么用
解决：这是由js底层机制决定的，直接使用mouseenter和mouseleave就可以解决了--（来自vue-native 中文论坛）

17.10.30
1、使用vue-cli+webpack开发时swiper的分页器样式和style的scoped会发生冲突，导致无法改变分页器样式，若想改变则取消scoped

11.1
1、总结：Vue父子组件时间调用问题
子组件调用父组件组件：
	1、使用this.$parent访问到父组件，然后可以直接调用其中的数据或者方法
	2、子组件通过$emit分发一个事件，在父组件监听这个事件
父组件调用子组件：
	1、在父组件中，使用$refs标记需要调用事件的子组件，可通过this.$refs.xxx来获取到标记的组件，从来调用里面的数据或者事件(ex:$refs标记在dom元素上时，$refs获得的就是该元素节点，而当其标记在组件上时，$refs获取到的就是个组件。当ref标记的组件是路由时，$refs获取到的是当前显示的路由)
	2、若是清晰了解子组件在父组件所有组件中是第几个，可以直接用this.$children[index]来访问改组件，但是使用此方法需要注意几点： ①组件的顺序不得轻易改变
	    ②不能在该组件前随意添加组件
2、font-style:normal可去掉字体样式，包括i标签自带的斜体
3、ul下li的list-style颜色是随着li的颜色改变的，简单的样式可以直接通过css达到而不用引用图片
4、text-indent:2em;首行缩进2字符

11.4
Vue模块化开发时，font-family："中文字体";这种写法在开发模式下有效，但是打包后会失效，因为引号中的内容在打包过程中会转化成unicode码，从来失效。直接去掉引号可以解决这个问题。但是手机端的时候字体依然无效，手机只支持少量类型的字体。若想在手机端用该中文字体则需要使用自定义字体的方法。

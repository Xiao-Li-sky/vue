# 灌篮高手项目

##制作首页App组件
1.完成Header区域，使用的是Mint-ui中的Header组件
2.制作底部的Tabbar区域，使用MUI中的Tabbar.html 
3.在中间区域放置router-view来展示匹配到的路由组件

##改造tabbar 为router-link

##设置路由高亮

##点击tabbar中的路由链接，显示相应的路由组件

##加载首页轮播图数据

##改造新闻资讯
1.制作界面，使用MUI中的media-list.html 
2.获取数据 
3.渲染真实数据 

##球员详细数据和评论子组件
1.获取球员数据 
2.渲染球员数据 
3.评论子组件 
+获取评论数据 
+渲染评论数据 
+为“加载更多”绑定事件 数组追加cancat()

##发表评论
1.把文本框进行双向数据绑定 
2.为“发表”按钮绑定事件
3.评论为空提示用户 
4.vue-resource将评论内容提交给服务器 
5.评论成功查看评论
+手动拼接一个对象，将对象unshift追加到comments数组中

##图片区域顶部滑动
1.mui-scroll-wrapper是通过mui.min.js文件导入mui实现的，并初始化mui
2.去除严格模式
+方法1：使用插件@babel/plugin-transform-strict-mode并配置.babelrc 
+方法2：配置.babelrc文件，通过忽略对mui.min.js的转化"ignore":['./lib/mui/js/mui.min.js']

##缩略图插件vue-preview
1.img标签class不能去掉 
2.每个图片对象必须有w和h属性
3.由于open属性无法使用所以采用了另一种形式<vue-preview>
+新的形式需要加上msrc属性 

##制作 篮球商品列表

##手机测试
1.处于同一局域网 
2.设置package.json中dev --host

##页面跳转 
1.a标签 
2.window.location.href 叫编码式导航

##vue跳转
1.this.$route 是路由参数对象，所有路由中的参数params,query都属于它
2.this.$router 是路由导航对象，可以使用JS代码实现路由的前进、后退，跳转到新的url地址
+this.$router.push('path')

##商品
1.篮球商品列表
2.详情数据 
3.评论 
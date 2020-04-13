# 项目知识点

### day1
1. 不支持通配符 * -- 手写代替
2. 根变量:root -- 定义在page{}里
3. 多个文件引用使用相对路径
4. data-xxx="{{}}" 传递数据
5. wx:key直接使用属性
6. flex布局列表排列需要定宽且wrap
7. scroll-view需要定髙
8. 存储全局变量
9. image的宽高
10. swiper的高
11. 通过index关联显示

### day2
1. 数据缓存
   * web window.localStorage.setItem('key', value) / 字符串
   * mini wx.setStorageSync('key', value) 类型不限
2. 页面传参 / 启动页加参数
3. 父子组件之间传值、事件
4. **需要在wxml中显示的数据放data中，更新数据需要setData; 取data中的数据: this.data.xxx**
5. **data中的数据可显示，可存放；全局变量只用于存放数据**
6. **在发送请求的时候可以添加 加载中效果，针对多个请求，使用变量++ --**
7. 商品分类

### day3
1. [预览大图](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)
2. 商品详情
3. button - open-type 分享、客服
4. 购物车缓存记录
5. 收货地址 - api接口调用(封装)
6. 购物车列表价格、数量计算

### day4
1. 小程序支付流程
2. 个人中心主页
3. 页面栈数组，最大长度10，用于onshow中获取参数 getCurrentPages()
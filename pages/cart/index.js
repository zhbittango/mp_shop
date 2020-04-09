import { getSetting, openSetting, chooseAddress, showModal, showToast } from "../../utils/wxApi"

// pages/cart/index.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null,
    cart: [],
    isSelectAll: false,
    totalPrice: 0,
    totalNum: 0
  },

  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    /* 获取收货地址 */
    const address = wx.getStorageSync('address');
    /* 获取购物车数据 */
    const cart = wx.getStorageSync('cart') || []
    // console.log(cart)

    /* 
      1 控制是否全选
      2 计算选中价格总和及数量
      3 更新数据及[缓存]
    */
    this.calcCart(cart)
    this.setData({
      address
    })
  },

  async selectAddr() {
    try {
      /* 地址授权信息 */
      const setting = await getSetting()
      const auth = setting.authSetting["scope.address"]
      if (auth === false) {
        /* 打开设置 */
        await openSetting()
      }
      /* 选择地址 */
      const address = await chooseAddress()
      /* 保存地址 */
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
      wx.setStorageSync('address', address);
      // console.log(address);
    } catch (err) {
      console.log(err);
    }
  },

  /* 全选 */
  selectAll() {
    // const isSelectAll = cart.every(item => item.checked)
    const { cart, isSelectAll } = this.data
    cart.forEach(item => item.checked = !isSelectAll)
    // wx.setStorageSync('cart', cart)
    this.calcCart(cart)
  },

  /* 勾选商品操作 */
  toggleSelect(e) {
    // console.log(e);
    const id = e.currentTarget.dataset.id
    // console.log(id);
    const cart = wx.getStorageSync('cart') || []
    // const cart = this.data.cart
    const index = cart.findIndex(item => item.goods_id === id)
    cart[index].checked = !cart[index].checked
    // wx.setStorageSync('cart', cart)
    this.calcCart(cart)
  },

  /* 计算购物车数据 */
  calcCart(cart) {
    let totalPrice = 0
    let totalNum = 0
    let isSelectAll = true
    cart.forEach(item => {
      if (item.checked) {
        totalPrice += item.num * item.goods_price
        totalNum++
      } else {
        isSelectAll = false
      }
    })
    /* 空数组不全选 */
    isSelectAll = cart.length === 0 ? false : isSelectAll
    this.setData({
      cart, totalPrice, totalNum, isSelectAll
    })
    wx.setStorageSync('cart', cart)
  },


  /* 商品数量 */
  async numberHandle(e) {
    const { cart } = this.data
    const { id, operation } = e.currentTarget.dataset
    const index = cart.findIndex(item => item.goods_id === id)
    if (cart[index].num === 1 && operation === -1) {
      const res = await showModal({content: '是否将该商品移出购物车？'})
      if (res.confirm) {
        cart.splice(index, 1)
        this.calcCart(cart)
      }
    }
    else {
      cart[index].num += operation
      this.calcCart(cart)
    }
    // console.log(cart);
  },

  /* 支付 */
  async handlePay() {
    const { address, totalNum } = this.data
    if(!address) {
      await showToast({title: '请选择收货地址！'})
      return
    }
    if(totalNum === 0) {
      await showToast({title: '请选中商品需要付款的商品！'})
      return
    }
    wx.navigateTo({
      url: '/pages/pay/index',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
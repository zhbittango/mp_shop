import { getSetting, openSetting, chooseAddress, showModal, showToast } from "../../utils/wxApi"

// pages/cart/index.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null,
    cart: [],
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
    let cart = wx.getStorageSync('cart') || []
    cart = cart.filter(item => item.checked)
    console.log(cart)

    let totalPrice = 0
    let totalNum = 0
    cart.forEach(item => {
      if (item.checked) {
        totalPrice += item.num * item.goods_price
        totalNum++
      }
    })
    this.setData({
      address, cart, totalPrice, totalNum,
    })
  },


  /* 支付 */
  async handlePay() {
    const { address, totalNum } = this.data
    if (!address) {
      await showToast({ title: '请选择收货地址！' })
      return
    }
    if (totalNum === 0) {
      await showToast({ title: '请选中商品需要付款的商品！' })
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
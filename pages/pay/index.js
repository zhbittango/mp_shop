import { getSetting, openSetting, chooseAddress, showModal, showToast, requestPayment } from "../../utils/wxApi"
import { createOrder, getPayParams, getOrder } from "../../network/order";

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
    // console.log(cart)

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
  async handleOrderPay() {
    try {
      /* 1 判断是否存在tooken */
      const token = wx.getStorageSync('token');
      if (!token) {
        wx.navigateTo({
          url: '/pages/auth/index'
        })
        return
      }
      /* 2 创建订单 */
      // const header = { Authorization: token }
      /* 3 请求体参数 */
      const { totalPrice, address, cart } = this.data
      const order_price = totalPrice
      const consignee_addr = address
      const goods = cart.map(item => [item.goods_id, item.goods_number, item.goods_price])

      /* 4 生成订单编号 */
      // const data = { data: { order_price, consignee_addr, goods }, header }
      // console.log(data);
      // console.log({...data});
      const { order_number } = await createOrder({ order_price, consignee_addr, goods })

      /* 5 发起预支付 */
      const { pay } = await getPayParams(order_number)

      /* 6 微信支付api */
      await requestPayment(pay)

      /* 7 查询订单 */
      const order = await checkOrder(order_number)
      await showToast({ title: '支付成功！' })

      /* 更新购物车的缓存 */
      let storageCart = wx.getStorageSync('cart')
      storageCart = wx.filter(v => !v.checked)
      
      wx.setStorageSync(cart, storageCart)

      wx.navigateTo({
        url: '/pages/order/index'
      });
    } catch (err) {
      await showToast({ title: '支付失败！' })
      console.log(err);
    }
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
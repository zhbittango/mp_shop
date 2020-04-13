import { getOrders } from "../../network/order"

// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '全部', isActive: true },
      { title: '待付款', isActive: false },
      { title: '待发货', isActive: false },
      { title: '退款/退货', isActive: false }
    ],
    list: []
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    /* 1 获取页面栈-10页 */
    const pages = getCurrentPages();
    /* 2 获取当前页面 */
    const currentPage = pages[pages.length - 1]
    console.log(currentPage);
    const { type } = currentPage.options
    console.log(type);
    this.changeTab(type - 1)
    this._getOrders({ type: type })
  },

  async _getOrders(type) {
    let { message: { orders } } = await getOrders(type)
    orders = orders.map(v => ({ ...v, create_time_cn: new Date(v.create_time * 1000).toLocaleString() }))
    console.log(orders);
    this.setData({
      list: orders
    })
  },

  tabsClick(e) {
    // console.log(e);
    const index = e.detail
    this._getOrders({ type: index + 1 })
    this.changeTab(index)
  },

  changeTab(index) {
    const { tabs } = this.data
    tabs.forEach((item, i) => item.isActive = index === i ? true : false)
    this.setData({
      tabs
    })
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
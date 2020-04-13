// pages/collect/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '商品收藏', isActive: true, type: 'All', more: true },
      { title: '品牌收藏', isActive: false },
      { title: '店铺收藏', isActive: false },
      { title: '浏览定位', isActive: false }
    ],
    list: []
  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const list = wx.getStorageSync('collect') || [];
    this.setData({
      list
    })
  },

  tabsClick(e) {
    // console.log(e);
    const index = e.detail
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
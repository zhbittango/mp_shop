// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    collectCount: 0
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    /* 获取用户信息缓存 */
    const userInfo = wx.getStorageSync('userInfo');
    console.log(userInfo);
    this.setData({ userInfo })
  },

  /**
  * 生命周期函数--监听页面显示
  */
  // onShow: function () {
  //   /* 获取用户信息缓存 */
  //   const userInfo = wx.getStorageSync('userInfo');
  //   console.log(userInfo);
  //   this.setData({ userInfo })
  // },

  getUserInfo(e) {
    console.log(e);
    const { userInfo } = e.detail
    wx.setStorageSync('userInfo', userInfo);
    this.setData({ userInfo })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const collect = wx.getStorageSync('collect');
    this.setData({
      collectCount: collect.length || 0
    })
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
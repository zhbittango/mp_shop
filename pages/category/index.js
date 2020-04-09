// pages/category/index.js

import { getCates } from '../../network/category'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftList: [],
    rightList: [],
    currentIndex: 0,
    top: 0
  },

  cates: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cates = wx.getStorageSync('cates')
    if (!cates) {
      this._getCates()
    } else {
      if (Date.now() > cates.time + 1000 * 60 * 5) {
        this._getCates()
      } else {
        this._setList(cates.cates)
      }
    }
  },

  async _getCates() {
    try {
      const data = await getCates()
      const cates = data.message
      console.log('catetory', cates);
      
      wx.setStorageSync('cates', { time: Date.now(), cates });
      this._setList(cates)
    } catch (err) {
      console.log(err)
    }
  },

  _setList(cates) {
    this.cates = cates
    const leftList = cates.map(item => item.cat_name)
    const rightList = cates[0].children
    this.setData({
      leftList,
      rightList
    })
  },

  cateClick(e) {
    // console.log(e);
    const index = e.currentTarget.dataset.index
    this.setData({
      top: 0,
      currentIndex: index,
      rightList: this.cates[index].children
    })
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
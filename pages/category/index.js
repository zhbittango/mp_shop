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
    this._getCates()
  },

  _getCates() {
    getCates().then(res => {
      console.log(res)
      
      const cates = res.data.message
      this.cates = cates
      const leftList = cates.map(item => item.cat_name)
      const rightList = cates[0].children
      this.setData({
        leftList,
        rightList
      })
    }).catch(err => {
      console.log(err)
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
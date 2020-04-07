import { getBanners, getCates, getFloorData } from "../../network/index"

//index.js
//获取应用实例

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    cates: [],
    floorData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getBanners()
    this._getCates()
    this._getFloorData()
  },
  
  /* 获取轮播图数据 */
  async _getBanners() {
    try {
      const res = await getBanners()
      const banners = res.data.message
      console.log('banners', banners)
      this.setData({
        banners
      })
    } catch (err) {
      console.log(err)
    }
  },

  _getCates() {
    getCates().then(res => {
      console.log('cates' ,res);
      const cates = res.data.message
      this.setData({
        cates
      })
    }).catch(err => {
      console.log(err);
    })
  },

  _getFloorData() {
    getFloorData().then(res => {
      console.log('floorData' ,res);
      const floorData = res.data.message
      this.setData({
        floorData
      })
    }).catch(err => {
      console.log(err);
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
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
    console.log('onLoad');
    
    this._getBanners()
    this._getCates()
    this._getFloorData()
  },
  
  /* 获取轮播图数据 */
  async _getBanners() {
    try {
      const data = await getBanners()
      let banners = data.message
      // banners = banners.map(v => ({...v, navigator_url: v.navigator_url.replace(/main/,'index')}))
      banners.forEach(v => v.navigator_url = v.navigator_url.replace(/main/,'index'))
      console.log('banners', banners)
      this.setData({
        banners
      })
    } catch (err) {
      console.log(err)
    }
  },

  _getCates() {
    getCates().then(data => {
      console.log('cates' ,data);
      const cates = data.message
      this.setData({
        cates
      })
    }).catch(err => {
      console.log(err);
    })
  },

  _getFloorData() {
    getFloorData().then(data => {
      console.log('floorData' ,data);
      const floorData = data.message
      floorData.forEach(v => v.product_list.forEach(v1 => v1.navigator_url = v1.navigator_url.replace(/\?/,'/index?')))
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
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefdatah: function () {

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
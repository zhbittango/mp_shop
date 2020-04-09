import { getDetailById } from "../../network/goods";

// pages/goods_detail/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {}
  },

  detailData: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const { goods_id } = options
    this._getDetailById(goods_id)
  },

  async _getDetailById(id) {
    const { message: detail } = await getDetailById(id);
    console.log(detail);
    this.detailData = detail
    this.setData({
      detail: {
        goods_name: detail.goods_name,
        goods_price: detail.goods_price,
        goods_introduce: detail.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: detail.pics
      }
    })
  },

  addCart() {
    const cart = wx.getStorageSync('cart') || [];
    const index = cart.findIndex(item => item.goods_id === this.detailData.goods_id)
    if(index === -1){
      this.detailData.num = 1
      this.detailData.checked = true
      cart.push(this.detailData)
    }else{
      cart[index].num ++
    }
    wx.setStorageSync('cart', cart);
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 1500,
      mask: true,
    });
      
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
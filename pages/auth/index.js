import { login } from "../../utils/wxApi";
import { getToken } from "../../network/login"

// pages/auth/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  async authPay(e) {
    // console.log(e);
    try {
      /* 1 获取用户信息 */
      const { encryptedData, rawData, iv, signature } = e.detail
      /* 2 获取code api */
      const { code } = await login()
      console.log(code);
      
      /* 3 向服务端发送请求获取token */
      const { token } = await getToken({ encryptedData, rawData, iv, signature, code })
      /* 4 存入缓存，同时返回上一页 */
      wx.setStorageSync('token', token)
      wx.setStorageSync('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo')
      wx.navigateBack({
        delta: 1
      });
    } catch (err) {
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
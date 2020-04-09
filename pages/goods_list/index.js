// pages/goods_list/index.js
import { getList } from '../../network/goods'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { title: '综合' , isActive: true, type: 'All', more: true},
      { title: '销量' , isActive: false, type: 'sell', more: true},
      { title: '价格' , isActive: false, type: 'price', more: true}
    ],
    list: [],
    more: true
  },

  queryInfo: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.queryInfo.cid = options.id
    this._getList(this.queryInfo)
  },

  async _getList(query) {
    const { message } = await getList(query);
    const list = message.goods
    /* 设置下拉底线 */
    if(list.length === 0) {
      this.setData({
        more: false
      })
    }
    console.log(list);
    /* 更新list */
    this.data.list.push(...list)
    this.setData({
      list: this.data.list
    })

    /* 4 数据请求成功后自动关闭下拉刷新 */
    wx.stopPullDownRefresh();
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.more){
      this.queryInfo.pagenum ++
      this._getList(this.queryInfo)
    }    
  },

    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    /* 1 重置list数据 */
    this.setData({
      list: [],
      more: true
    })
    /* 2 重置页码 */
    this.queryInfo.pagenum = 1;
    /* 3 重新请求数据 */
    this._getList(this.queryInfo)
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
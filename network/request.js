import { baseUrl } from '../config/network'

let ajaxTimes = 0;
export default function (options) {
  ajaxTimes++;
  wx.showLoading({
    title: '加载中',
    mask: true
  });



  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      data: options.data || {},
      method: options.method || 'GET',
      // header: {'content-type':'application/json'},
      // dataType: 'json',
      // responseType: 'text',
      success: res => {
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        ajaxTimes--;
        if (ajaxTimes == 0) wx.hideLoading()
      }
    })
  })
}
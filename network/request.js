import { baseUrl } from '../config/network'

let ajaxTimes = 0;
export default function (params) {
  // console.log('params', params);
  
  /* 添加请求加载中效果 */
  ajaxTimes++;
  wx.showLoading({
    title: '加载中',
    mask: true
  });

  /* 请求头带token */
  let header = {}
  header = {...params.header}
  if(params.url.includes('/my/')){
    header['Authorization'] = wx.getStorageSync('token');
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + params.url,
      data: params.data || {},
      method: params.method || 'GET',
      header,
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
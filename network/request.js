import { baseUrl } from '../config/network';

export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      data: options.data || {},
      method: options.method ||'GET',
      // header: {'content-type':'application/json'},
      // dataType: 'json',
      // responseType: 'text',
      success: resolve,
      fail: reject
      // complete: ()=>{}
    });
  })
}
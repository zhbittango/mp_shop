/* 微信api */


/* 获取设置 */
export function getSetting() {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: resolve,
      fail: reject,
      complete: () => {}
    });
  })
}

/* 打开设置 */
export function openSetting() {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: resolve,
      fail: reject,
      complete: () => {}
    });
  })
}

/* 选择地址 */
export function chooseAddress() {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: resolve,
      fail: reject,
      complete: () => {}
    });
  })
}

/* 模态对话框 */
export function showModal (params) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: params.content || '是否确认此操作？',
      success: resolve,
      fail: reject,
      complete: ()=>{}
    });
  })
}

/* 消息提示框 */
export function showToast (params) {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title: params.title || '提示',
      icon: params.icon || 'none',
      image: params.image || '',
      mask: params.mask || true,
      duration: params.duration || 1500,
      success: resolve,
      fail: reject,
      complete: ()=>{}
    });
  })
}

/* 登录 */
export function login () {
  return new Promise((resolve, reject) => {
    wx.login({
      timeout:10000,
      success: resolve,
      fail: reject,
      complete: ()=>{}
    });
  })
}

/* 支付 */
export function requestPayment (params) {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      ...params,
      success: resolve,
      fail: reject,
      complete: ()=>{}
    });
  })
}

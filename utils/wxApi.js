
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
export function showModal (options) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: options.content || '是否确认此操作？',
      success: resolve,
      fail: reject,
      complete: ()=>{}
    });
  })
}

/* 消息提示框 */
export function showToast (options) {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title: options.title || '提示',
      icon: options.icon || 'none',
      image: options.image || '',
      duration: options.duration || 1500,
      success: resolve,
      fail: reject,
      complete: ()=>{}
    });
  })
}
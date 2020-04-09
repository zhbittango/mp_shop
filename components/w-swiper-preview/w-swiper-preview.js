// components/w-swiper/w-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    preview(e) {
      const urls = this.properties.list.map(item => item.pics_mid)
      const current = urls[e.currentTarget.dataset.index]
      wx.previewImage({
        current, // 当前显示图片的http链接
        urls// 需要预览的图片http链接列表
      })
    }
  },
  externalClasses: ['w-swiper-preview']
})

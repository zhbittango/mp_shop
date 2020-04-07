import request from "request";

export function getBanners() {
  return request({
    url: '/home/swiperdata'
  })
}

export function getCates() {
  return request({
    url: '/home/catitems'
  })
}

export function getFloorData() {
  return request({
    url: '/home/floordata'
  })
}
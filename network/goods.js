import request from "request";

export function getList(data) {
  return request({
    url: '/goods/search',
    data
  })
}

export function getDetailById(id) {
  return request({
    url: '/goods/detail',
    data: {goods_id: id}
  })
}

export function getSearch(data) {
  return request({
    url: '/goods/qsearch',
    data
  })
}
import request from "request";

export function createOrder(params) {
  return request({
    ...params,
    url: '/my/orders/create',
    method: 'post'
  })
}

export function checkOrder(params) {
  return request({
    ...params,
    url: '/my/orders/chkOrder',
    method: 'post'
  })
}

export function getOrders(data) {
  return request({
    data,
    url: '/my/orders/all',
  })
}

export function getPayParams(data) {
  return request({
    data,
    url: '/my/orders/req_unifiedorder',
    method: 'post'
  })
}



import request from "request";

export function getToken(data) {
  return request({
    url: '/users/wxlogin',
    data,
    method: 'post'
  })
}
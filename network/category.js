import request from "request";

export function getCates() {
  return request({
    url: '/categories'
  })
}

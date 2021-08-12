import request from '../utils/request';
// 定义代理变量
const pox = '/api'
export function query() {
  return request('/api/users');
}

export function testCnode() {
  return request( pox + '/api/v1/topics')
}

// 注册mock接口
export function mockData() {
  return request('api/mockdta')
}
 
/*
 * @Author: ailiang
 * @Date: 2021-01-18 15:59:38
 * @LastEditors: ailiang
 * @LastEditTime: 2021-01-19 10:06:00
 */
const http = require('http');
http.createServer((request, response) => {
  let body = []
  request.on('error', (err) => {
    console.log(err)
  }).on('data', (chunk) => {
    body.push(chunk.toString());
  }).on('end', () => {
    body = Buffer.concat([Buffer.from(body.toString())]).toString()
    console.log('body:', body)
    response.writeHead(200, {
      'Content-type': 'text/html'
    })
    response.end('hello world\n')
  })
}).listen(8088)
console.log('server start')
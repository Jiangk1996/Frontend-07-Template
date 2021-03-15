/*
 * @Author: ailiang
 * @Date: 2021-01-18 15:59:38
 * @LastEditors: ailiang
 * @LastEditTime: 2021-02-22 16:33:25
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
    response.end(`<html>
    <head>
       <meta charset='UTF-8'/>
       <title>html</title>
       <style>
        body div {
          font-size: 16px;
          color: blue;
        }
        body #app {
          color: red;
        }
       </style>
    </head>
    <body>
      <div id="app">hello world</div>
    <script>
    
    </script>
    </body>
    </html>`)
  })
}).listen(8088)
console.log('server start')
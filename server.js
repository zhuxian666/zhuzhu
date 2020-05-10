var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('��ָ���˿ںźò�����\nnode server.js 8888 ����������')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** �����￪ʼ�������治Ҫ�� ************/

  console.log('HTTP ·��Ϊ\n' + path)
  if(path == '/style.js'){
    response.setHeader('Content-Type', 'text/css; charset=GBK')
    response.write('body{background-color: #ddd;}h1{color: red;}')
    response.end()
  }else if(path == '/script.html'){
    response.setHeader('Content-Type', 'text/javascript; charset=GBK')
    response.write('alert("����JSִ�е�")')
    response.end()
  }else if(path == '/index.css'){
    response.setHeader('Content-Type', 'text/html; charset=GBK')
    response.write('<!DOCTYPE>\n<html>'  + 
      '<head><link rel="stylesheet" href="/style.js">' +
      '</head><body>'  +
      '<h1>���</h1>' +
      '<script src="/script.html"></script>' +
      '</body></html>')
    response.end()
  }else{
    response.statusCode = 404
    response.end()
  }

  /******** ������������治Ҫ�� ************/
})

server.listen(port)
console.log('���� ' + port + ' �ɹ�\n�����ڿ���ת��720��Ȼ���õ緹�Ҵ� http://localhost:' + port)

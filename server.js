const h=require('http'),f=require('fs'),p=require('path');
h.createServer((q,s)=>{
  let u=decodeURIComponent(q.url.split('?')[0]);
  if(u==='/')u='/index.html';
  const fp=p.join(process.cwd(),u);
  f.readFile(fp,(e,d)=>{
    if(e){s.writeHead(404);s.end('404');return;}
    const t={'.html':'text/html','.js':'text/javascript','.css':'text/css'}[p.extname(fp)]||'application/octet-stream';
    s.writeHead(200,{'Content-Type':t});
    s.end(d);
  });
}).listen(8080,'127.0.0.1',()=>console.log('Server running at http://127.0.0.1:8080'));

const express = require('express');
httpProxy = require('http-proxy');


let app = express();
const PORT = process.env.PORT || 3000;
var proxy = httpProxy.createProxyServer({});


app.use(express.json());
app.use(express.static('./'));


let services = [{ service: 'product', url: `http://ec2-13-58-162-184.us-east-2.compute.amazonaws.com:3001/` }, { service: 'images', url: 'http://ec2-18-188-250-254.us-east-2.compute.amazonaws.com:3002/' }, { service: 'reviews', url: 'http://ec2-13-58-212-164.us-east-2.compute.amazonaws.com:3003/' }];
for (let i = 0; i < services.length; i++) {

  app.get(`/${services[i].service}/:pid`, (req, res) => {
    proxy.web(req, res, { target: services[i].url });
  });
}



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
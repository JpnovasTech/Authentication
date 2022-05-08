var express = require('express');
var config = require('./config');
const http = require('http');
var mongoose = require('mongoose');
var cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();

var index = require('./routes/index');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true});

connect.then((db)=>{
  console.log('Sucessfully Connected to the server');
}, (err) =>{
  console.log(err);
})

const hostname='localhost';
const port = config.PORT;

app.use(cors()) 

app.use('/', index.router);

// app.use('/api',createProxyMiddleware({ 
//   target: 'http://localhost:3000/', //original url
//   changeOrigin: true, 
//   //secure: false,
//   onProxyRes: function (proxyRes, req, res) {
//      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//   }
// }), index.router);


const server = http.createServer(app);
app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})
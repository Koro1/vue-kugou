var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//配置加载第三方接口的模块 request
var request = require('request');



/*//自己定义一个访问数据的路由
router.get("/ma",function(req,res){
  //request("写请求地址"，回调函数（错误，响应，数据）)
  request(req.query.urls, function (error, response, body) {
    console.log('error:', error);
    //console.log( body); //body就是接受的数据
    //res.send(body);//输出都是 字符串
    res.send(JSON.parse(body));//通过JSON.parse(body) 把字符串格式的json转成对象形式的json
  });
});*/

//自己定义一个访问数据的路由
router.get("/ma",function(req,res){
  //request("写请求地址"，回调函数（错误，响应，数据）)
  var options = {
    url: req.query.urls,
    headers: {//通过设置 User-Agent 来把当前的请求模拟 成手机客户端请求
      'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Mobile Safari/537.36'
    }
  };
  request(options, function (error, response, body) {
    //console.log(body); //body就是接受的数据
    res.send(JSON.parse(body));//通过JSON.parse(body) 把字符串格式的json转成对象形式的json
  });
});






module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//���ü��ص������ӿڵ�ģ�� request
var request = require('request');



/*//�Լ�����һ���������ݵ�·��
router.get("/ma",function(req,res){
  //request("д�����ַ"���ص�������������Ӧ�����ݣ�)
  request(req.query.urls, function (error, response, body) {
    console.log('error:', error);
    //console.log( body); //body���ǽ��ܵ�����
    //res.send(body);//������� �ַ���
    res.send(JSON.parse(body));//ͨ��JSON.parse(body) ���ַ�����ʽ��jsonת�ɶ�����ʽ��json
  });
});*/

//�Լ�����һ���������ݵ�·��
router.get("/ma",function(req,res){
  //request("д�����ַ"���ص�������������Ӧ�����ݣ�)
  var options = {
    url: req.query.urls,
    headers: {//ͨ������ User-Agent ���ѵ�ǰ������ģ�� ���ֻ��ͻ�������
      'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Mobile Safari/537.36'
    }
  };
  request(options, function (error, response, body) {
    //console.log(body); //body���ǽ��ܵ�����
    res.send(JSON.parse(body));//ͨ��JSON.parse(body) ���ַ�����ʽ��jsonת�ɶ�����ʽ��json
  });
});






module.exports = router;

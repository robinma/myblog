// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/test',function(req,res){
// 	res.render('error',{})
// })


// module.exports = router;

var User = require('../model/user');

module.exports = function(app){
	//进入首页
	app.get('/',function(req,res){
		res.render('index', '');
	});
	
	//进入blog首页
	app.get('/blogs',function(req,res){

		res.render('blogs/index',{});
	});


  //================
  // 后台管理
  //================
  //后台入口
  app.get('/admin',function(req,res){
    res.render('admin/index',{})
  });
  //登录
  app.get('/admin/login',function(req,res){
  	res.render('admin/login',{})
  });
  //注册
  app.get('/admin/reg',function(req,res){
  	res.render('admin/reg',{});
  });

};
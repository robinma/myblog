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


module.exports = function(app){
	//进入首页
	app.get('/',function(req,res){
		res.render('index', '');
	});
	
	//进入blog首页
	app.get('/blogs',function(req,res){

		res.render('blogs/index',{});
	});



};
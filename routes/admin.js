var express=require("express")
var filter=require('../lib/filter');
var path = require('path');
var router=express.Router()

var getViewControl=function(router){
  var views=express().get('views');
    return require(path.join(views,router));
}



/*get admin index*/
var control=getViewControl('admin/index');

router.get('/',filter.authorize,function(req,res){

  control.init(req,res);

});
//article list
router.get('/article',function(req,res){
  control.init(req,res);
});


//login page
router.get('/login',function(req,res){

  res.render('admin/login',{})
})

//ajax login
router.post('/login',function(req,res){
  control.login(req,res);
  
})

//add article list
router.get('/article/publish',function(req,res){
  publish.apply(this,arguments)
});
//ajax publish article
router.post('/article/publish',function(req,res){
  ajaxpublish.apply(this,arguments);
})
//===================
/**
 * publish article
 */

var publish=function(req,res){
  res.render('admin/publish',{});
 }

var ajaxpublish=function(req,res){
    var publish = getViewControl('admin/publish');
    console.log('publish ajaxpublish',publish)
    publish.postArtucle(req,res);
};

module.exports=router;

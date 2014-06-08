var express=require("express")
var filter=require('../lib/filter');
var router=express.Router()

/*get admin index*/
var control=require('../controllers/admin/index');

router.get('/',filter.authorize,function(req,res){

  control.init(req,res);

});
//article list
router.get('/article',function(req,res){
  control.init(req,res);
});
//add article list
router.get('/article/publish',function(){
  publish.apply(this,arguments)
});

//login page
router.get('/login',function(req,res){

  res.render('admin/login',{})
})

//ajax login
router.post('/login',function(req,res){
  control.login(req,res);
  
})

//===================
/**
 * publish article
 */

var publish=function(req,res){
  res.render('admin/publish',{});
 }

module.exports=router;

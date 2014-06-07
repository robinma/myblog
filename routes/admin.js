var express=require("express")
var filter=require('../lib/filter');
var router=express.Router()

/*get admin index*/
var control=require('../controllers/admin/index');

router.get('/',filter.authorize,function(req,res){

  control.init(req,res);

});

router.get('/login',function(req,res){

  res.render('admin/login',{})
})

//ajax login
router.post('/login',function(req,res){
  control.login(req,res);
  
})


module.exports=router;

var express=require("express")
var router=express.Router()

/*get admin index*/
var control=require('../controllers/admin/index');
router.get('/',function(req,res){

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

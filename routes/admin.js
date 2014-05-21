var express=require("express")
var router=express.Router()

/*get admin index*/
router.get('/',function(req,res){
	//res.render('admin/index',{})
  res.render('admin/login',{})
});

module.exports=router;

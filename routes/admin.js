var express=require("express")
var router=express.Router()

/*get admin index*/
router.get('/',function(req,res){
	res.render('admin/index',{})
});

module.exports=router;

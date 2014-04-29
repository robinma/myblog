/**
 * @author 马中杰
 */

var express=require("express");

var fapp=express();


fapp.get('/',function(req,res){
	res.send('Hello everyone!!')
})

fapp.listen('8080')
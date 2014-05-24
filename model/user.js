var db=require('./initConnect');

var mongoose=db.getMongoose();
var Schema = mongoose.Schema;


//定义用户对象
userSchema=new Schema({
  username:String,
  password:String
});

mongoose.model('User',userSchema);

var User=mongoose.model('User');

//当前用户是否已登录
exports.islogin=function(){
  
};
//
exports.login=function(){

};


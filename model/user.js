var db=require('./initConnect');

var mongoose=db.getMongoose();
var Schema = mongoose.Schema;


//定义用户对象
userSchema=new Schema({
  username:String,
  password:String,
  power:0             //0-100  100:super admin 50：普通admin 10：user 0:限制
});

mongoose.model('User',userSchema);

var User=mongoose.model('User');
// var user=new User;
// user.username='admin';
// user.password='123';
// user.power=100;

// user.save(function(err){
//   if(err){
//     throw err;
//   }
//   console.log('--',err)
// })

//当前用户是否已登录
exports.islogin=function(){
  
};
//
exports.superAdmin=function(username,pwd,callback){
  var result=User.find({},function(err,docs){
    console.log(docs)
  });

};


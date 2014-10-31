var AV = require('./initConnect');

// var mongoose = db.getMongoose();
// var Schema = mongoose.Schema;


// //定义用户对象
// var userSchema = new Schema({
//   user_id: String,
//   username: String,
//   password: String,
//   power: 0 //0-100  100:super admin 50：普通admin 10：user 0:限制
// });

// mongoose.model('User', userSchema);

// var User = mongoose.model('User');
// // var user=new User;
// // user.username='admin';
// // user.password='123';
// // user.power=100;

// // user.save(function(err){
// //   if(err){
// //     throw err;
// //   }
// //   console.log('--',err)
// // })

// //当前用户是否已登录
// exports.islogin = function() {

// };
// //
// exports.superAdmin = function(username, pwd, callback) {
//   var result = User.find({
//     "username": username
//   }, function(err, docs) {
//     if (err) {
//       throw err;
//     }
//     if (docs[0].password === pwd) {
//       return callback({
//         code: 1,
//         power: docs.power,
//         msg: 'success'
//       });
//     } else {
//       return callback({
//         code: 0,
//         msg: 'faile'
//       })
//     }
//   });

// };
//create AV.object 实例
var AV_User = AV.Object.extend("User");


function User(user){
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
};

module.exports = User;

//存储用户信息
User.prototype.save = function(callback) {
	//要存入数据库的用户文档
	var user = {
		name:this.name,
		password : this.password,
		email : this.email
	};

	//保存user数据
	var avUser = new AV_User();
	avUser.save(user,{
		success:function(avuser){
			console.log('save success');
			callback(false,avuser);
		},
		error:function(avuser,error){
			console.log('save error');
			callback(error,avuser);
		}
	})
};

//读取用户信息
User.prototype.get = function(name,callback){
	var query = new AV.Query(AV_User);
	query.get({name:name},{
		success:function(avUser){
			callback(false,avUser);
		},
		error:function(object,error){
			callback(error,object);
		}
	});

}



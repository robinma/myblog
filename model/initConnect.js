// /**
//  * @author jerry
//  * init puclic connect mongodb
//  */
// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// //database addr
// var dburl = require("../config").db;

// //cononect database
// exports.connect = function(callback) {
// 	var mongo=mongoose.connect(dburl,function(error){
//     if(error) throw error;
//     if(typeof callback === 'function'){
//       callback(mongo)
//     }
//   });
//   return mongo;
// }

// exports.disconnect = function(callback) {
// 	mongoose.disconnect(callback)
// }

// //exports mongoose connect
// exports.getMongoose=function(){
//   return mongoose;
// }
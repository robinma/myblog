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

/**
 *连接 avos 
 */
var AV = require('avoscloud-sdk').AV;

 const appId = 'kvnt0him31pzphgl307qc73l66001ypcisbqqyk0n2f5oumu';
 const appKey = 'zz5mrk0pvx3kgrauzmttwp9t4xsf0kmsccqxq1zhp7dto68r';
 const masterKey = 'zz5mrk0pvx3kgrauzmttwp9t4xsf0kmsccqxq1zhp7dto68r';

AV.initialize(appId,appKey,masterKey);

module.exports = AV;

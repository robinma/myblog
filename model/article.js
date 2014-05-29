var db = require('./initConnect');

var mongoose = db.getMongoose();
var Schema = mongoose.Schema;

//定义对像格式
var Article = new Schema({
  id: String,
  title: String,                  //文章标题
  subtitle: String,               //副标题，英文
  content: String,                //conetne
  time: {type:Date,default:Date.now},                     //创建时间
  tags: Array,                    //标签
  intro: String,                  //简介
  author: {type:String,default:'赤灵'},                 
  view: {type:Number,default:0},
  comment: {type:Number,default:0},
  like: {type:Number,default:0}
});





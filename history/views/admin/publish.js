//发表文章

var model_article = require('../../model/article');
var _=require('../../node_modules/underscore');

exports.postArtucle = function(req, res) {

  var title = req.body['title'];
  var subtitle = req.body['subtitle'];
  var typeclass = req.body['typeclass'];
  var intro = req.body['intro'];
  var content = req.body['content'];


  //verify
  //....
  console.log(title)
  if(_.isEmpty(title)){
    res.json(errJson('标题不可为空'));
    return;
  }

  if(_.isEmpty(typeclass)){
    res.json(errJson('分类不可为空'));
    return;
  }

  if(_.isEmpty(content)){
    res.json(errJson('文章不可为空'));
    return;
  }
  //save data

  model_article.saveArticle(req,function(err,data){

  });

  res.json(succJson('保存成功'))


}

//return mistake data
var errJson=function(msg){
  return {code:0,msg:msg}
}
//return right data
var succJson=function(msg){
  return {code:1,msg:msg}
}
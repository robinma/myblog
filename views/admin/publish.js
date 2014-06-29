//发表文章

var model_article = require('../../model/article');
var _=require('../../node_modules/underscore');

exports.postArtucle = function(req, res) {


  var title = req.params['title'];
  var subtitle = req.params['subtitle'];
  var typeclass = req.params['typeclass'];
  var intro = req.params['intro'];
  var content = req.params['content'];
  console.log(req)

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

  res.json(succJson('保存成功'))

}

var errJson=function(msg){
  return {code:0,msg:msg}
}

var succJson=function(msg){
  return {code:1,msg:msg}
}
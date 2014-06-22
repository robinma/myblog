//发表文章
exports.postArtucle = function(req, res) {

  var title = req.params['title'];
  var subtitle = req.params['subtitle'];
  var typeclass = req.params['typeclass'];
  var intro = req.params['intro'];
  var content = req.params['content'];

  //verify
  //....

  //save data

    

  res.json({
    code: 0
  });
}
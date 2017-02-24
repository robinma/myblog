//login verify
exports.authorize = function(req, res, next) {
  if(!req.session.user){
    res.redirect('/admin/login');
  }else{
    console.log('in next')
    next()
  }
};

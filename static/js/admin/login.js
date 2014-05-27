/**
 *登录模块
 *
 */
define(function(require, exports) {
  var $el;

  var init=function(){
    _todo();
  };

  var _todo=function(){
    $el=$('div[node-type="login-warp"]');
    $el.on('click','button[node-type="login-btn"]',function(){
      submit();
    });
  }

  var submit=function(){
    var unobj=$el.find('input[type="text"]'),pdobj=$el.find('input[type="password"]');
    var uname=unobj.val(),pwd=pdobj.val();
    if(uname.length>0 && pwd.length>0){
      $.post('/admin/login',{username:uname,password:pwd},function(data){
        console.log(data)
      })
    }

  };




  $(init);

});
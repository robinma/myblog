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
    })
    $(window).on('keydown',function(e){
      if(e.keyCode == 13){
        submit()
      }
    });
  }

  var submit=function(){
    var unobj=$el.find('input[type="text"]'),pdobj=$el.find('input[type="password"]');
    var uname=unobj.val(),pwd=pdobj.val();
    if(uname.length>0 && pwd.length>0){
      $.post('/admin/login',{username:uname,password:pwd},function(data){
        if(data.code == 1){
          location.href = '/admin'
        }else{
          $el.find('div[node-type="tip"]').show().find('p').text(data.msg);
        }
      })
    }

  };




  $(init);

});
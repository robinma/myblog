/**
 * 
 */
define(function(){
  
  var init=function(){
    events();
  };

  var events=function(){
    $('button[node-type="submit"]').on('click',function(){
      var data=getFromDate()
      submitForm(data)
    })
  };

  var getFromDate=function(){
    var form=$('form[role="form"]');
    var formval=form.serializeArray();
    var temp={};
    $.each(formval,function(index,data){
        temp[data.name]=data.value;
    })
    return temp;
  }

  var submitForm=function(data,callback){
    $.post('/admin/article/publish',data,function(data){
      console.log(data,'=-=-=-')
      if(typeof callback === 'function') callback(data);
    })
  };

  init();

});
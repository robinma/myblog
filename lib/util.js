/** create unit id
 * GUID
 * ps.javascript mvc guid page:39
 */
var MD5=require('../node_modules/MD5');

exports.createUnitId=function(){
  var unid=guid() + new Date().getTime();
  return MD5(unid).subStr(0,16)
};

function guid () {
  // body...
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
    var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
    return v.toString(16)
  }).toUpperCase();
}
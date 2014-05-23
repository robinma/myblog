/**
 * @author jerry
 * init puclic connect mongodb
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//database addr
var dburl = require("../config").db;

//cononect database
exports.connect = function(callback) {
	var mongo=mongoose.connect(dburl);
  if(typeof callback) callback();
}

exports.disconnect = function(callback) {
	mongoose.disconnect(callback)
}

/**
 * @author jerry
 */
module.exports = function(grunt) {
	var transport = require('grunt-cmd-transport');
	var style = transport.style.init(grunt);
	var text = transport.text.init(grunt);
	var script = transport.script.init(grunt);

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		uploadFilePath:'error.file',


		
		
		clean : {
			spm : ['.build']
		},
		"sftp-deploy":{
			build:{
				auth:{
					host:'10.21.118.246',
					port:22,
					authKey:'key1'
				},
				src:'D:/boya_v2/dianping/www/<%=uploadFilePath %>',
				dest:'/usr/local/code/dianping/www/<%=uploaddirPath %>',
				exclusions: ['/path/to/source/folder/**/.DS_Store', '/path/to/source/folder/**/Thumbs.db', 'dist/tmp','.svn/tmp','.svn'],
				keep:[],
				server_sep:'/'
			}
		},
		
		//watch files
		watch:{
			css:{
				files:['css/**/*.css'],
				tasks:['sftp-build']
			},
			js:{
				files:['js/**/*.js'],
				tasks:['sftp-build']
			},
			options:{
				interrupt:false,
				spawn: false,
				debounceDelay: 250,
				reload:false
			}
		}
		
	});
	
	grunt.event.on('watch',function(action,filePath,target){
		var filePath=filePath.replace(/[\\]/ig,'/')
		var subfp=filePath.substr(0,filePath.lastIndexOf('/'))
		grunt.config.set('uploadFilePath',filePath)
		grunt.config.set('uploaddirPath',subfp)
	})

	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sftp-deploy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	/*define module*/
	grunt.registerTask('build-menu', ['transport:topmenu','concat:topmenu','uglify:topmenu']);

}

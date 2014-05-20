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
		jshint:{
			login:{
				files:[{
					cwd:"./js/2013/login/",
					src:"**/*.js",
					filter:"isFile"
				}]
			},
			
			//define
			topmenu:{
				files:[{
					cwd:'./js/2013/',
					src:['common/newMenubar.js','common/acountCenter.js','menu/main_menu_init.js'],
					filter:'isFile'
				}]
			}
		},
		transport : {
			options : {
				paths : ['./js/2013/'],
				alias : '<%= pkg.spm.alias %>',
				parsers : {
					'.js' : [script.jsParser],
					'.css' : [style.css2jsParser],
					'.html' : [text.html2jsParser]
				}
			},
			common:{
				options:{
					idleading:''
				},
				files:[{
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["common/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			lib:{
				options:{
					idleading:''
				},
				files:[{
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["lib/**/*"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			modules:{
				options:{
					idleading:''
				},
				files:[{
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["modules/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			
			login:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["login/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			home:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["home/**/*"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			venues:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["venues/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			news:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["news/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			search:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["search/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			register:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["register/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			activeApply:{
				options:{
					idleading:''
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["activeApply/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			ucenter:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["ucenter/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			message:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["message/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			// topmenu:{
				// files:{
					// src:["js/2013/menu/*.js"]
				// },
				// options:{
					// globals:{
						// jQuery:true,
						// seajs:true
					// }
				// }
			// }
			topmenu:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["menu/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			activelist:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["activelist/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			project:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["project/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			agency:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["agency/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			friend:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["friend/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			album:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["album/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			profile:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["profile/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			},
			course:{
				options:{
					idleading:'',
					
				},
				files:[{
					expand: true,	//启动动态扩展
					cwd:"js/2013/",	//匹配相对于 cwd的src来源
					src:["course/**/*.js"],
					filter:"isFile",
					dest:".build/",
					ext:".js"
				}]
			}
		},
		//==============================
		concat:{
			options : {
				paths : ['.build/'],
				include : 'relative',
				alias : '<%= pkg.spm.alias %>'
			},
			common:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/common',
					src:['**/*.js'],
					dest:'dest/common',
					ext:'.js'
				}]
			},
			lib:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['lib/**/*.js'],
					dest:'dest/',
					ext:'.js'
				}]
			},
			modules:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['modules/**/*.js'],
					dest:'dest/',
					ext:'.js'
				}]
			},
			login:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['login/**/*.js'],
					dest:'dest/',
					ext:'.js'
				}]
			},
			home:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['home/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			venues:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['venues/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			news:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['news/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			search:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['search/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			register:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['register/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			activeApply:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['activeApply/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			ucenter:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['ucenter/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			message:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['message/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			// topmenu:{
				// options:{
					// noncmd:true
				// },
				// files:[{
					// 'dest/menu/menu.js':['js/2013/menu/newMenubar.js','js/2013/menu/acountCenter.js','js/2013/menu/nav_message.js','js/2013/menu/main_menu_init.js'],
					// 'dest/menu/home_topmenu.js':['js/2013/menu/acountCenter.js','js/2013/menu/nav_message.js']
				// }]
			// }
			topmenu:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['menu/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			activelist:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['activelist/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			project:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['project/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			agency:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['agency/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			friend:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['friend/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			album:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['album/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			profile:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['profile/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			course:{
				options:{
					include : 'all'
				},
				files:[{
					expand:true,
					cwd:'.build/',
					src:['course/**/*.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			}
		},
		//=============
		uglify:{
			options : {
				paths : ['.'],
				include : 'relative'
			},
			common:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['common/**/*','!common/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			lib:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['lib/**/*','!lib/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			modules:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['modules/**/*','!modules/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			login:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['login/**/*','!login/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			home:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['home/**/*','!home/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			venues:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['venues/**/*','!venues/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			news:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['news/**/*','!news/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			search:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['search/**/*','!search/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			register:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['register/**/*','!register/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			activeApply:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['activeApply/**/*','!activeApply/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			ucenter:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['ucenter/**/*','!ucenter/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			message:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['message/**/*','!message/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			//define modules
			// topmenu:{
				// files:[{
					// expand:true,
					// cwd:'dest/',
					// src:['menu/**/*','!menu/**/*-debug.js'],
					// filter:'isFile',
					// dest:'dest/',
					// ext:'.min.js'
				// }]
			// }
			topmenu:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['menu/**/*','!menu/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			activelist:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['activelist/**/*','!activelist/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			project:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['project/**/*','!project/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			agency:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['agency/**/*','!agency/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			friend:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['friend/**/*','!friend/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			album:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['album/**/*','!album/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			profile:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['profile/**/*','!profile/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			},
			course:{
				files:[{
					expand:true,
					cwd:'dest/',
					src:['course/**/*','!course/**/*-debug.js'],
					filter:'isFile',
					dest:'dest/',
					ext:'.js'
				}]
			}
		},
		
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
	/*seajs module*/
	grunt.registerTask('build-common', ['transport:common','concat:common','uglify:common']);
	grunt.registerTask('build-lib', ['transport:lib']);
	grunt.registerTask('build-modules', ['transport:modules','concat:modules','uglify:modules']);
	
	grunt.registerTask('build-default', ['transport:lib','transport:common','transport:modules']);
	
	grunt.registerTask('build-login', ['transport:login','concat:login','uglify:login']);
	grunt.registerTask('build-home', ['transport:home','concat:home','uglify:home']);
	grunt.registerTask('build-venues', ['transport:venues','concat:venues','uglify:venues']);
	grunt.registerTask('build-news', ['transport:news','concat:news','uglify:news']);
	grunt.registerTask('build-search', ['transport:search','concat:search','uglify:search']);
	grunt.registerTask('build-register', ['transport:register','concat:register','uglify:register']);
	grunt.registerTask('build-activeApply', ['transport:activeApply','concat:activeApply','uglify:activeApply']);
	grunt.registerTask('build-ucenter', ['transport:ucenter','concat:ucenter','uglify:ucenter']);
	grunt.registerTask('build-message', ['transport:message','concat:message','uglify:message']);
	grunt.registerTask('build-activelist', ['transport:activelist','concat:activelist','uglify:activelist']);
	grunt.registerTask('build-project', ['transport:project','concat:project','uglify:project']);
	grunt.registerTask('build-agency', ['transport:agency','concat:agency','uglify:agency']);
	grunt.registerTask('build-friend', ['transport:friend','concat:friend','uglify:friend']);
	grunt.registerTask('build-album', ['transport:album','concat:album','uglify:album']);
	grunt.registerTask('build-profile', ['transport:profile','concat:profile','uglify:profile']);
	grunt.registerTask('build-course', ['transport:course','concat:course','uglify:course']);
	
//ftp upload
grunt.registerTask('sftp-build', ['sftp-deploy:build']);

//watch
grunt.registerTask('watch-css', ['watch:css']);
grunt.registerTask('watch-js', ['watch:js']);
grunt.registerTask('watch-jc', ['watch']);
}

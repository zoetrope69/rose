module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'js/build/script.js'
            }
        },

        uglify: {
            build: {
                src:  'js/build/script.js',
                dest: 'js/build/script.min.js',
                options: {
                    sourceMap: 'js/build/script.map.js',
                    sourceMapPrefix: 2,
                    sourceMappingURL: 'script.map.js',
                    banner: '/*! <%= pkg.name %> ~ <%= grunt.template.today("yyyy-mm-dd") %> */'
                }
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'js/*.js']
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/style.css': 'css/rose.scss'
                }
            } 
        },

        autoprefixer: {
            dist: {
                files: {
                    'css/build/style.css': 'css/build/style.css'
                }
            }
        },

        csso: {
            dist: {
                files: {
                    'css/build/style.min.css': 'css/build/style.css'
                }
            }
        },

        htmllint: {
            all: ["*.html", "*.html"]
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }   
        },

        jekyll: {
            server : {    
                options: {
                    serve : true,
                },
                src : 'templates',
                dest: 'dev',
                server_port : 9001,
                auto : true
            },
            dev: {
                src: 'templates',
                dest: 'dev'
            },
            prod: {
                src: 'templates',
                dest: 'prod'
            }
        },

        exec: {
            build: {
                cmd: 'jekyll build'
            },
            serve: {
                cmd: 'jekyll serve'
            }
        },

        watch: {

            options: {
                livereload: true,
                atBegin: true
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify', 'exec:build'],
                options: {
                    spawn: false
                }
            },

            css: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'csso', 'exec:build'],
                options: {
                    spawn: false
                }
            },

            jekyll: {
                files: ['_posts/*.md', '_drafts_*.md', 'templates/*.html'],
                tasks: ['exec:build']
            },

            images: {
                files: ['images/*.{png,jpg,gif}'],
                tasks: ['imagemin', 'exec:build'],
                options: {
                    spawn: false
                }
            },

        },

    });

    // js stuff
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // css stuff
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-csso');

    // linters
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // image compression
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // watch for changes in files
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-exec');

    // command line usage
    grunt.registerTask('default', ['concat', 'uglify','sass', 'autoprefixer', 'csso', 'imagemin']); // 'grunt'
    grunt.registerTask('lint', ['jshint', 'htmllint']); // 'grunt lint'
    grunt.registerTask('dev', ['watch']); // 'grunt dev'

};
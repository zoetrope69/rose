module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['scripts/*.js'],
                dest: 'scripts/build/script.js'
            }
        },

        uglify: {
            build: {
                src:  'scripts/build/script.js',
                dest: 'scripts/build/script.min.js',
                options: {
                    sourceMap: 'scripts/build/script.map.js',
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
                    style: 'compressed',
                    sourcemap: true
                },
                files: {
                    'stylesheets/build/style.css': 'stylesheets/rose.scss'
                }
            } 
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9'],
                map: true
            },
            dist: {
                files: {
                    'stylesheets/build/style.css': 'stylesheets/build/style.css'
                }
            }
        },

        csso: {
            dist: {
                files: {
                    'stylesheets/build/style.min.css': 'stylesheets/build/style.css'
                }
            }
        },

        csslint: {
            dist: {
                options: {
                import: false
                },
                src: ['stylesheets/build/style.css']
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
            dev: {
                options: {
                    drafts: true
                }
            },
            prod: {
                options: {
                    drafts: false
                }
            }
        },

        copy: {
            css: {
                src: 'stylesheets/build/**',
                dest: '_site/css/',
                flatten: true,
                expand: true,
                filter: 'isFile'
            },
            js: {
                src: ['scripts/build/**', 'scripts/lib/**'],
                dest: '_site/js/',
                flatten: true,
                expand: true,
                filter: 'isFile'
            },
        },

        connect: {
            server: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    base: './_site',
                    open: {
                        target: 'http://localhost:4000'
                    }
                }
            }
        },

        watch: {

            options: {
                livereload: true,
                atBegin: true
            },

            scripts: {
                files: ['scripts/*.js'],
                tasks: ['concat', 'uglify', 'copy:js'],
                options: {
                    spawn: false
                }
            },

            css: {
                files: ['stylesheets/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'csso', 'copy:css'],
                options: {
                    spawn: false
                }
            },

            images: {
                files: ['images/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false
                }
            },

            jekyll: {
                files: ['**/*.html', '_config.yml',
                        '_data/*', '*.txt', '_posts/*', '_drafts/*', '_plugins/*'],
                tasks: ['jekyll:dev', 'copy:css', 'copy:js'],
                options: {
                    spawn: false
                }
            }

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
    grunt.loadNpmTasks('grunt-contrib-csslint');

    // image compression
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // build, serve and watch
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jekyll');

    // command line usage
    grunt.registerTask('build', ['concat', 'uglify', 'sass', 'autoprefixer', 'csso', 'imagemin']); // 'grunt build'
    grunt.registerTask('lint', ['jshint', 'htmllint', 'csslint']); // 'grunt lint'
    grunt.registerTask('default', ['build', 'jekyll:dev', 'copy:css', 'copy:js', 'connect', 'watch']); // 'grunt'
    grunt.registerTask('prod', ['build', 'jekyll:prod', 'copy:css', 'copy:js', 'connect', 'watch']); // 'grunt prod'

};
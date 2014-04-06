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
                    style: 'compressed',
                    sourcemap: true
                },
                files: {
                    'css/build/style.css': 'css/rose.scss'
                }
            } 
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version'],
                map: true
            },
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

        csslint: {
            dist: {
                options: {
                import: false
                },
                src: ['css/build/style.css']
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

        watch: {

            options: {
                livereload: true,
                atBegin: true
            },

            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },

            css: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'csso'],
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

    // watch for changes in files
    grunt.loadNpmTasks('grunt-contrib-watch');

    // command line usage
    grunt.registerTask('build', ['concat', 'uglify', 'sass', 'autoprefixer', 'csso', 'imagemin']); // 'grunt build'
    grunt.registerTask('lint', ['jshint', 'htmllint', 'csslint']); // 'grunt lint'
    grunt.registerTask('default', ['build', 'watch']); // 'grunt'

};
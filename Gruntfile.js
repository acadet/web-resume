const sass = require('node-sass');

module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Project configuration
    grunt.initConfig({
        pug: {
            dev: {
                options: {
                    pretty: true
                },
                files: {
                    'dev/index.html': 'pug/index.pug'
                }
            },
            prod: {
                options: {
                    pretty: false
                },
                files: {
                    'prod/index.html': 'pug/index.pug'
                }
            }
        },
        sass: {
            dev: {
                options: {
                    sourcemap: 'none',
                    implementation: sass,
                },
                files: {
                    'dev/all.css': 'sass/all.scss'
                }
            },
            prod: {
                options: {
                    implementation: sass,
                    sourcemap: 'none',
                    outputStyle: 'compressed'
                },
                files: {
                    'prod/all.css': 'sass/all.scss'
                }
            }
        },
        watch: {
            pug: {
                files: 'pug/**/*.pug',
                tasks: ['pug:dev'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            sass: {
                files: 'sass/**/*.scss',
                tasks: ['sass:dev'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        },
        concurrent: {
            dist: {
                tasks: ['watch:sass', 'watch:pug'],
                options: {
                    logConcurrentOutput: true,
                    limit: 3
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'prod/all.js': 'prod/all_original.js'
                }
            }
        },
        copy: {
          dev: {
            src: ['imgs/**', 'favicon/**', 'fonts/**'],
            dest: 'dev/'
          },
          prod: {
            src: ['imgs/**', 'favicon/**', 'fonts/**'],
            dest: 'prod/'
          }
        }
    });

    grunt.registerTask('default', 'concurrent');

    grunt.registerTask('dev', [
        'pug:dev',
        'sass:dev',
        'copy:dev',
    ]);

    grunt.registerTask('prod', [
        'pug:prod',
        'sass:prod',
        'copy:prod'
    ]);
};

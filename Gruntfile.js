module.exports = function(grunt) {

    grunt.initConfig({
        multiresize: {
            target: {
                src: 'src/svg/ptpb.svg',
                dest: ['dist/images/ptpb-32.png',
                       'dist/images/ptpb-128.png',
                       'dist/images/ptpb-512.png'],
                destSizes: ['32x32', '128x128', '512x512']
            }
        },
        less: {
            development: {
                options: {
                    paths: ["css"],
                    strictMath: true
                },
                files: {
                    "dist/css/pbs.css": "src/less/pbs.less"
                }
            }
        },
        watch: {
            styles: {
                files: ['src/less/*.less'],
                tasks: ['less']
            },
            images: {
                files: ['src/svg/*.svg'],
                tasks: ['multiresize']
            }
        }
    });

    grunt.loadNpmTasks('grunt-multiresize');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'multiresize']);
}

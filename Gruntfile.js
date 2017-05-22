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
                    paths: ["node_modules/bootstrap/less"],
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
        },
        curl: {
            'dist/css/asciinema-player.css': 'https://github.com/asciinema/asciinema-player/releases/download/v2.0.0/asciinema-player.css',
            'dist/js/asciinema-player.js': 'https://github.com/asciinema/asciinema-player/releases/download/v2.0.0/asciinema-player.js'
        }
    });

    grunt.loadNpmTasks('grunt-multiresize');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-curl');

    grunt.registerTask('default', ['less', 'multiresize', 'curl']);
}

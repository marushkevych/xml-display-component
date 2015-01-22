module.exports = function(grunt) {

    grunt.initConfig({
        watchify: {
            options: {
                debug: true
            },
            example: {
                src: './bowerify.js',
                dest: 'example/XmlDisplayComponent.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-watchify');

    grunt.registerTask('default', ['watchify:example']);
    grunt.registerTask('watch', ['watchify:example:keepalive']);
};

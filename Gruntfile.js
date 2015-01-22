module.exports = function(grunt) {

    grunt.initConfig({
        watchify: {
            options: {
                debug: true
            },
            example: {
                src: './src/bowerify.js',
                dest: 'example/XmlDisplayComponent.js'
            },
            dist: {
                src: './src/bowerify.js',
                dest: 'XmlDisplayComponent.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-watchify');

    grunt.registerTask('default', ['watchify:dist']);
    grunt.registerTask('watch', ['watchify:example:keepalive']);
};

module.exports = function(grunt) {

    grunt.initConfig({
        watchify: {
            options: {
                debug: true
            },
            example: {
                src: './src/bowerify.js',
                dest: 'example/bower_components/xml-display-component/xml-display-component.js'
            },
            dist: {
                src: './src/bowerify.js',
                dest: 'xml-display-component.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-watchify');

    grunt.registerTask('default', ['watchify:dist']);
    grunt.registerTask('watch', ['watchify:example:keepalive']);
};

module.exports = function ( grunt ) {
    require('grunt-karma')(grunt);

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

  grunt.registerTask('default', ['karma']);
};

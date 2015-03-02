module.exports = (grunt) ->
  grunt.loadNpmTasks('grunt-tsd')
  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    tsd:
      refresh:
        options:
          command: 'reinstall'
          latest: true
          config: './tsd.json'
          opts: {}

    typescript:
      ts:
        src: ['ts/**/*.ts']
        dest: 'js'
        options:
          basePath: 'ts'
          noImplicitAny: false
          module:        'commonjs'
          target:        'es5'
          comments:      true

    coffee:
      test:
        files:
          './test/tests.js': ['./test/*_test.coffee']

    concat:
      options:
        separator: ';'
      dist:
        src: ['js/**/*.js'],
        dest: './test/bundle.js'

    watch:
      run:
        files: ["ts/**/*.ts", "test/**/*_test.coffee"]
        tasks: ["make"]

    connect:
      server:
        options:
          hostname: "localhost"
          port: 8888
          base: './'

  grunt.registerTask("run", ["connect", "make", "watch:run"])
  grunt.registerTask("make", ["typescript:ts", "coffee:test", "concat"])
  grunt.registerTask("default", ["make"])

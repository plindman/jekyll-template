module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    vendor: {
      src: [
        'bower_components/jquery/jquery.js',
        'bower_components/underscore/underscore.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js'
      ],
      dest: 'assets/vendor.js'
    }    
  },
  copy: {
    bootstrap: {
      files: [
        {expand:true, cwd: 'bower_components/bootstrap/dist', src: ['**'], dest: 'assets/bootstrap/'}
      ]
    }
  },
  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve --baseurl= --watch'
    }
  },
  githubPages: {
    target: {
      options: {
        // The default commit message for the gh-pages branch
        commitMessage: 'generated'
      },
      // The folder where your gh-pages repo is
      src: '../dist'
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-exec');
grunt.loadNpmTasks('grunt-exec');
grunt.loadNpmTasks('grunt-github-pages');

grunt.registerTask('default', [ 'concat', 'copy', 'exec:build' ]);
grunt.registerTask('serve', [ 'exec:serve' ]);
grunt.registerTask('deploy', ['githubPages:target']);
};

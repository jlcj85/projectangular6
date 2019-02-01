module.exports = function(grunt) {

    const message = grunt.option('message');

    grunt.initConfig({
        commands: {
            status: {
                cmd: 'git status'
            },
            add: {
                cmd: 'git add --all'
            },
            commit: {
                cmd: `git commit -m ${message}`
            },
            push: {
                cmd: `git push`
            }
        }
    });

    grunt.loadNpmTasks('grunt-commands');

    grunt.registerTask('gitpush', [
        'commands:status', 
        'commands:add', 
        'commands:commit',
        'commands:push'
    ]);
}
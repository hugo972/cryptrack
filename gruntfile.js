module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "./client",
                        src: ["*.html", "*.css"],
                        dest: "./bin/client"
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            "./node_modules/core-js/client/shim.min.js",
                            "./node_modules/systemjs/dist/system.js",
                            "./node_modules/zone.js/dist/zone.min.js",
                            "./client/app/system.config.js"
                        ],
                        dest: "./bin/client/"
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ["./web.config"],
                        dest: "./bin/"
                    }
                ]
            }
        },
        ts: {
            server: {
                src: ['./server/**/*.ts'],
                dest: './bin/server',
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: false,
                    rootDir: "./server"
                }
            },
            client: {
                src: ['./client/**/*.ts'],
                dest: './bin/client',
                options: {
                    module: "commonjs",
                    target: "es6",
                    sourceMap: true,
                    moduleResolution: "node",
                    emitDecoratorMetadata: true,
                    experimentalDecorators: true,
                    rootDir: "./client"
                }
            }
        },
        systemjs: {
            options: {
                sfx: true,
                baseURL: "./bin/client/app",
                configFile: "./client/app/system.config.js",
                minify: false,
                build: {
                    mangle: false
                }
            },
            dist: {
                files: [{
                    "src": "./bin/client/app/application.js",
                    "dest": "./bin/client/application.js"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-systemjs-builder");
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('default', ['copy', 'ts', 'systemjs']);
};
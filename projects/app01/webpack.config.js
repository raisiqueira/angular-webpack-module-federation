const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'http://localhost:3000/',
        uniqueName: 'app01',
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'app01',
            library: { type: 'var', name: 'app01' },
            filename: 'remoteEntry.js',
            exposes: {
                './Module': './projects/app01/src/app/modules/hello/hello.module.ts',
            },

            shared: ['@angular/core', '@angular/common', '@angular/router'],
        })
    ],
};

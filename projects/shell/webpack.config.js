const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output: {
        publicPath: 'http://localhost:5000/',
        uniqueName: 'shell',
    },
    optimization: {
        runtimeChunk: false,
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                'app01': 'app01@http://localhost:3000/remoteEntry.js',
            },
            shared: ['@angular/core', '@angular/common', '@angular/router'],
        }),
    ],
};

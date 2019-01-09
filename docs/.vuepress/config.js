const path = require('path');

module.exports = {
    title: 'Fluent Design UI',
    description: ' A Microsoft\'s Fluent Design UI based on Vue.js',
    themeConfig: {
        sidebar: [
            {
                title: 'Basic',
                collapsable: false,
                children:[
                    '/basic/installation.md'
                ]
            },
            {
                title:'components',
                collapsable: false,
                children:[
                    '/components/button.md'
                ]
            }
            
        ]
    },
    chainWebpack: (config, isServer) => {
        config.resolve.alias.set('@', path.join(__dirname,'../../src'));
    }
};
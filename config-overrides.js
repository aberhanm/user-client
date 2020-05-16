
const { override, fixBabelImports, addLessLoader, addWebpackModuleRule } = require('customize-cra');
var path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackModuleRule({
        test: /\.svg$/,
        include: resolve('src/assets/icons'),
        use: [
            {
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]',
                }
            }
        ]
    })
)
const loader = require('uniswap-v2-loader')
const dump_csv = require('path').join(__dirname, 'dump.csv')

module.exports.load = (params = {}) => loader.load({
    factory: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
    filename: dump_csv,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
        filename: dump_csv,
        ...params
    }
)
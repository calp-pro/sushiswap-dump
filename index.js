const loader = require('uniswap-v2-loader')
const dump = require('path').join(__dirname, 'dump')

module.exports.load = (params = {}) => loader.load({
    factory: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
    filename: dump,
    csv: false,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
        filename: dump,
        csv: false,
        ...params
    }
)
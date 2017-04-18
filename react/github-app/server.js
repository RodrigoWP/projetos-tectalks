/**
 * Created by Rodrigo on 20/08/2016.
 */
'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(3000, (err) => {
    if(err){
        return console.log(err)
    }

    console.log("Listennig on http://localhost:3000")
})

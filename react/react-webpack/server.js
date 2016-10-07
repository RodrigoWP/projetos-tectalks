/**
 * Created by Digo on 01/10/2016.
 */
'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
}).listen(3000, (err) => {
    if(err){
         return console.log(err)
    }

    console.log("Listening on http://localhost:3000")
})
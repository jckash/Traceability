const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(`public`))
//  // include and initialize the rollbar library with your access token
// var Rollbar = require('rollbar')
// var rollbar = new Rollbar({
//   accessToken: '0144beb79bd5405e875c2a95283bd24e',
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })

// // record a generic message and send it to Rollbar
// rollbar.log('Hello world!')

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(4000, () => console.log(`server running on 4000`))
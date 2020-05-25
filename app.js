const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const PORT = config.get('PORT')

const app = express()

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {console.log(`App has been started on port: ${PORT}...`)})
    } catch (error) {
        console.log('Error', error.message)
        process.exit(1)
    }
}
start()
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,HEAD,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

app.use(express.static('public'))

app.listen(port, () => console.log(`server ready: ${port}`))

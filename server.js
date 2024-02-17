const express = require('express')
const app = express()
const port = 8001
const cors = require('cors')

app.use(cors())

const mejaRoute = require('./routes/meja.route')
app.use(`/meja`, mejaRoute)

const menuRoute = require('./routes/menu.route')
app.use(`/menu`, menuRoute)

const transaksiRoute = require('./routes/transaksi.route')
app.use(`/transaksi`, transaksiRoute)

const userRoute = require('./routes/user.route')
app.use(`/user`, userRoute)
app.listen(port, () => {
    console.log(`Server of Cafe runs on port ${port}`)
    })
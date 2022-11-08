const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./config/database')
const userRoutes = require('./routes/userRoutes')
const quoteRoutes = require('./routes/userRoutes')
const path = require('path')
require('dotenv').config();
// const { isUserAuthenticated } = require('./middleware/auth')

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// CONNECTION TO DATABASE
db()

// VERCEL DEPLOYMENT
const env = 'production'
if (env === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", function (_, res) {
        res.sendFile(
            path.join(__dirname, "../frontend/build/index.html"),
            function (err) {
                if (err) {
                    res.status(500).send(err)
                }
            }
        )
    })
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

// ROUTES
app.use('/auth', userRoutes)
app.use('/quote', quoteRoutes)

app.listen(5000, () => {
    console.log('App listening on http://localhost:5000');
})
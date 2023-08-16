const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { all } = require('./routes/root');

require('dotenv').config()
const PORT = process.env.PORT
const DB = process.env.DB

const projectsRoutes = require('./routes/projects')
const authRoute = require('./routes/authRoute')

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("User database connected successfully"))
.catch((err) => console.error(err));

app.use('/api/projects', projectsRoutes)

app.use('/api/auth', authRoute)

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`))
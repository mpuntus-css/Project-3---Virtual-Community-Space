import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
// import dotenv from 'dotenv'
import { dbConfig } from './config/config.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
// import router from './routes/index.js'
import eventsRouter from './routes/eventsRoutes.js'
import locationsRouter from './routes/locationsRoutes.js'


// import the router from your routes file
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// dotenv.config()

const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'development'

const app = express()

app.use(express.json())

// if (process.env.NODE_ENV === 'development') {
//     app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
// }
// else if (process.env.NODE_ENV === 'production') {
//     app.use(favicon(path.resolve('public', 'party.png')))
//     app.use(express.static('public'))
// }


if (NODE_ENV === 'development') {
    app.use(favicon(path.join(__dirname, '../client/public/party.png')))
  } else if (NODE_ENV === 'production') {
    app.use(favicon(path.join(__dirname, 'public/party.png')))
    app.use(express.static(path.join(__dirname, 'public')))
  }

// specify the api path for the server to use
// app.use('/api', router)
app.use('/api/events', eventsRouter)
app.use('/api/locations', locationsRouter)


if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})
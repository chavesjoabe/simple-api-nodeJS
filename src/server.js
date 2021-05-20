import express from 'express'
import routes from './routes/routes'
import mongoose from 'mongoose'

const PORT = 3334
const app = express()

const DATA_BASE_URL = "mongodb+srv://joabe:1234@cluster0.hnm3u.mongodb.net/userTest?retryWrites=true&w=majority"
const options = { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(DATA_BASE_URL, options)

const db = mongoose.connection
db.on('error', () => {
    console.log('error on database')
})
db.on('disconnected', () => {
    console.log('database disconnected')
})
db.on('open', () => {
    console.log('database connected')
})

app.use(express.json())
app.use(routes)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
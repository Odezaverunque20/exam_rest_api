import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import artistRoutes from './routes/artist.js'
import songRoutes from './routes/song.js'
import { register } from './controllers/auth.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/* routes */
app.post('/auth/register', register)
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/artists', artistRoutes)
app.use('/songs', songRoutes)

/* Connect to Database */
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    dbName: 'music'
})
.then(() => app.listen(PORT, () => console.log(`Server listening on ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`))
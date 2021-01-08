import express from 'express'
const logger = require('morgan');

const PORT = 3000

const userRouter = require('./router/users')

const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use('/api/users', userRouter)

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
})

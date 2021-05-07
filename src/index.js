const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')
const auth = require('./middleware/auth')
const { json } = require('express')

const app = express()
const port = process.env.PORT

// app.use((req,res, next) => {
//     res.status(503).send('Site is currently down, check back soon')
// }) 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=>{
    console.log('server up on: '+ port)
})

require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res)=>{
    res.send('I am suhan makhare')
})

app.get('/login' ,(req,res)=>{
    res.send('<h1>Hey ! please login as suhan it will be good if u do so </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
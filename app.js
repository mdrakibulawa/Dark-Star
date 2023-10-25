const express = require('express')
const app = express()
const home =  require("./routes/home.js") ;

app.use('' , home)

const port = process.env.PORT || '3000'
app.listen(port , ()=>{
console.log(`server is running in port ${port}`)
})
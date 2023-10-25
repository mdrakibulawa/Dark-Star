const express = require('express')
const app = express()
const home =  require("./routes/home.js") ;


app.use(express.static('public'))

app.use('' , home)
app.set('view engine' , 'ejs')




const port = process.env.PORT || '3000'
app.listen(port , ()=>{
console.log(`server is running in port ${port}`)
})
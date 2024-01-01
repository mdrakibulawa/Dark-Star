const express = require('express')
const app = express()
const home =  require("./routes/home.js") ;

// use static folder and linkup
app.use(express.static('public'))

//ejs rendering
app.use('' , home)

//set ejs as a template engine
app.set('view engine' , 'ejs')




const port = process.env.PORT || '3000'
app.listen(port , ()=>{
console.log(`server is running in port ${port}`)
})
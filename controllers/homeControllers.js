const path = require('path')

const homeController = (req, res)=>{
    const content = {
        title : "Home Page 777",
        css : "css/navber.css"
    }
    res.render('home.ejs', content)
}

module.exports = homeController;
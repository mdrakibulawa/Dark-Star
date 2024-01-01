const path = require('path')

const homeController = (req, res)=>{
    res.render('home.ejs')
}

module.exports = homeController;
const path = require('path')

const homeController = (req, res)=>{
    res.render('index.ejs')
}

module.exports = homeController;
const path = require('path')

const homeController = (req, res)=>{
    res.sendFile(path.join(process.cwd() , 'views' , 'index.html'))
}

module.exports = homeController;
const express = require('express')
const router = express.Router()
const homeController =  require("../controllers/homeControllers.js") ;
const nihat = require('../controllers/nihat.js')

router.get('/', homeController)
router.get('/nihat' , nihat)

module.exports = router;
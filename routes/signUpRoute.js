const express = require('express')
const router = express.Router()
const {addNewUser} = require('../controllers/signUpController')

// router.get('/',(request,response)=>{
//     response.send(`Fetching...`)
// })

router.route('/').post(addNewUser)

module.exports = router
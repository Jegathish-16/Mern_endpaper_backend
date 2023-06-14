const express = require('express')
const router = express.Router()
const {userDate} = require('../controllers/userDataController')

router.route('/').post(userDate);

module.exports = router
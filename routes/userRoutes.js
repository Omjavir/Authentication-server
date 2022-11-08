const express = require('express')
const { register, login, getAllUser } = require('../controllers/userController')
const { auth } = require('../middleware/auth')
const router = express.Router()

// USER ROUTES
router.post('/register', register)
router.post('/login', login)
router.get('/allusers', auth, getAllUser)

module.exports = router
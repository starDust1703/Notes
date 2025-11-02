const { login, signup } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middlewares/validations');
const router = require('express').Router();

router.post('/signup', signupValidation, signup)
router.post('/login', loginValidation, login)

module.exports = router;
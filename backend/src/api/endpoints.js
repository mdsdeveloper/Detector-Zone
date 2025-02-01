const   express = require('express')
const router = express.Router()
const { login } = require('../controllers/loginController');
const { registro } = require('../controllers/registroController');

router.post('/login', login);
router.post('/registro', registro);

module.exports = router;
const router = require('express').Router();
const {
    createContact,
    getContact,
    saveContact, 
    login, 
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

//put authMiddleware anywhere that needs a token for verification of profile
router.route('/'). post(createContact).put(authMiddleware, saveContact);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getContact);

module.exports = router; 
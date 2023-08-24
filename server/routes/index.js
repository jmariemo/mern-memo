const router = require('express').Router();
const path = require('path');
const APIroutes = require('./api');

router.use('/api', APIroutes);

// connecting react front-end with server
router.use((req,res) => {
    res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

module.exports = router;
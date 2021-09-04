const express = require('express');
const router = express.Router();

router.get('/api/users', (req, res) => {
    return res.json({
        message: 'Get users route working s!!!'
    })
})

module.exports = router;
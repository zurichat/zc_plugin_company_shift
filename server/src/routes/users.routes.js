const express = require('express');
const router = express.Router();

// @route   GET api/v1/users
// @desk    Get logged in user. The user ID will come from zuri core
router.get('/', (req, res) => {
    res.send('fetch User ID from Zuri_core');
});

module.exports = router;
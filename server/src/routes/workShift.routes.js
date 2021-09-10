const express = require('express');
const router = express.Router();

// @route   GET api/v1/workshifts
// @desk    view all shifts
// access   public
router.get('/', (req, res) => {
    res.send('view shifts API SUCCESS!!!');
});

// @route   POST api/v1/workshift/:id
// @desk    create new shift
// access   Private
router.post('/', (req, res) => {
    res.send('create new shift API');
});

// @route   PUT api/v1/workshift/:id
// @desk    Update Contact
// access   Private, admin only
router.put('/', (req, res) => {
    res.send('Update workshit api');
});

// @route   DELETE api/v1/workshift/:id
// @desk    Delete contact
// access   Private
router.delete('/', (req, res) => {
    res.send('Delete workshift');
});

module.exports = router;
const express = require("express")
const router = express.Router()

// @route   GET api/v1/org
// @desk    Get organisation id from zuri_core
router.get("/", (req, res) => {
	res.send("organisation id API SUCCESS")
})

module.exports = router
const express = require("express")
const router = express.Router()

// @route   GET api/v1/auth
// @desk    Get authentication from zuri_core
router.get("/", (req, res) => {
	res.send("authentication API SUCCESS!!!")
})

module.exports = router
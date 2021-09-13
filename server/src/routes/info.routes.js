const express = require("express")
const router = express.Router()

// @route   GET api/v1/info
// @desk    provide information aabout workshift plugin
// access   public
router.get("/", (req, res) => {
	res.send("plugin info API SUCCESS!!!")
})

module.exports = router
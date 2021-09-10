const express = require("express")
const router = express.Router()

// @route   GET http://employeeshift.zuri.chat/sidebar
// @desk    Get get employee shift sidebar
// access   Private
router.get("/", (req, res) => res.json({
	"status": "success",
	"pluginId": "zc-shift-management-",
	"pluginName": "Company Shift Management Plug-In",
	"organisationId": "6138d1ae99bd9e223a37d8f0",
	"menuLink": {
		"title": "Company Shift Management",
		"icon": "https://res.cloudinary.com/eyiajd/image/upload/v1630473101/sidebarplugin/files_mq3woy.svg",
		"action": "Open Plugin"
	},
	"subItems": [
		{
			"title": "View Shifts",
			"icon": "https://res.cloudinary.com/eyiajd/image/upload/v1630472654/sidebarplugin/all-files_ewrlii.svg",
			"action": "View All Shifts",
			"badge": {
				"number": 25,
				"type": "Primary"
			}
		},
		{
			"title": "Create Shift",
			"icon": "https://res.cloudinary.com/eyiajd/image/upload/v1630472833/sidebarplugin/users_ovn4oc.svg",
			"action": "Create a shift",
			"badge": {
				"number": 2,
				"type": "Info"
			}
		},
		{
			"title": "Swap Shift",
			"icon": "https://res.cloudinary.com/eyiajd/image/upload/v1630472904/sidebarplugin/starred_japone.svg",
			"action": "Swap shift with another employee",
			"badge": {
				"number": 4,
				"type": "Info"
			}
		},
		{
			"title": "History",
			"icon": "https://res.cloudinary.com/eyiajd/image/upload/v1630472955/sidebarplugin/trash_ms7mit.svg",
			"action": "View Past shifts",
			"badge": {
				"count": 25,
				"type": "info"
			}
		},
		{
			"title": "Help",
			"icon": "https://res.cloudinary.com/eyiajd/image/upload/v1630472990/sidebarplugin/help-circle_zlzd4p.svg",
			"action": "View Help"
		}
	]
}))

// @route   POST http://employeeshift.zuri.chat/sidebar
// @desk    Add new book
// access   Private
router.post("/sidebar", (req, res) => res.json({
	message: "Sidebar API!!!",
}))

module.exports = router 
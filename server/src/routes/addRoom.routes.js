const router = require("express").Router()
//const axios = require("axios")
const uuid = require("uuid").v4

const db = require("../models/db.model")


router.route("/addRoom/:orgId")
	.post(async(req, res) => {
		const {room_title} = req.body
		const orgID = req.params.orgId

		//query plugins marketplace to get plugin id
		// const plugins = axios.get("https://api.zuri.chat/marketplace/plugins")
		const roomId = uuid()

		const rooms = {
			id: roomId,
			title: room_title
		}

		//create a new room
		const response = await db.create(rooms, "rooms", orgID)
		
		return res.json({
			response: response.data
		})

	})

module.exports = router
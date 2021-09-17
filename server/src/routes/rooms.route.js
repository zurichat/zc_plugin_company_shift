const router = require("express").Router();
const {
  createRoom,
  getAllRooms,
  deleteRoom,
  addToRoom,
  removeFromRoom,
  editRoom,
  setRoomPrivate,
  getUserRooms
} = require("../controllers/rooms.controller");

// GET ALL AVAILABLE ROOMS
router.get("/all", getAllRooms);

// GET A ROOM
// router.get('/:roomId', getRoom);

// CREATE A NEW ROOM
router.post("/create", createRoom);

// ADD A USER TO A ROOM
router.put("/add/:roomId", addToRoom);

// REMOVE A USER FROM A ROOM
router.put("/remove/:roomId", removeFromRoom);

// DELETE A ROOM
router.delete("/delete/:roomId", deleteRoom);

// EDIT A ROOM INFO
router.put("/update/:roomId", editRoom);

// MAKE ROOM PRIVATE
router.put("/setPrivate/:roomId", setRoomPrivate);

//GET USER ROOMS
router.get("/getUserRooms/:userId", getUserRooms);

module.exports = router;



///////////////////////////////////////////////
// const router = require("express").Router()
// //const axios = require("axios")
// const uuid = require("uuid").v4

// const db = require("../models/db.model")


// router.route("/addRoom/:orgId")
// 	.post(async(req, res) => {
// 		const {room_title} = req.body
// 		const orgID = req.params.orgId

// 		//query plugins marketplace to get plugin id
// 		// const plugins = axios.get("https://api.zuri.chat/marketplace/plugins")
// 		const roomId = uuid()

// 		const rooms = {
// 			id: roomId,
// 			title: room_title
// 		}

// 		//create a new room
// 		const response = await db.create(rooms, "rooms", orgID)
		
// 		return res.json({
// 			response: response.data
// 		})

// 	})

// module.exports = router




const axios = require("axios")
const config = require("../config")

let dbWrite = "https://api.zuri.chat/data/write"
//let dbRead = "https://api.zuri.chat/data/read"

const dbInput = {
	"plugin_id": config.pluginId,
	"organization_id": "",
	"collection_name": "",
	"bulk_write": false,
	"object_id": "",
	"filter": {},
	"payload": {}

}

const create = async (data, collection_name, orgId) => {
	dbInput.collection_name = collection_name
	dbInput.organization_id = orgId
	dbInput.payload = data

	try {
		const response = await axios.post(dbWrite, dbInput)  
		return response
	} catch (error) {
		console.log(error)
	}
	
}


module.exports = {
	create
}
const axios = require("axios");
const { response } = require("express");
const config = require("../config");

const databaseWriteUrl = "https://api.zuri.chat/data/write";
const databaseReadUrl = "https://api.zuri.chat/data/read";
const databaseDeleteUrl = "https://api.zuri.chat/data/delete";

// //let dbRead = "https://api.zuri.chat/data/read"

// const dbInput = {
// 	"plugin_id": config.pluginId,
// 	"organization_id": "",
// 	"collection_name": "",
// 	"bulk_write": false,
// 	"object_id": "",
// 	"filter": {},
// 	"payload": {}

// }

// const create = async (data, collection_name, orgId) => {
// 	dbInput.collection_name = collection_name
// 	dbInput.organization_id = orgId
// 	dbInput.payload = data

// 	try {
// 		const response = await axios.post(dbWrite, dbInput)
// 		return response
// 	} catch (error) {
// 		console.log(error)
// 	}

// }

// module.exports = {
// 	create
// }

class DatabaseConnection {
	constructor(collection_name) {
		this.data = {
			plugin_id: config.pluginId,
			organization_id: "",
			collection_name: collection_name,
			bulk_write: false,
			object_id: "",
			filter: {},
			payload: {},
		};
		this.delete_data = {
			plugin_id: config.pluginId,
			organization_id: "",
			collection_name: collection_name,
			bulk_delete: false,
			object_id: "",
			filter: {},
		};
	}
	create = async (payload) => {
		try {
			this.data.payload = payload;

			const response = await axios.post(databaseWriteUrl, this.data);

			return response.data;
		} catch (error) {
			return error;
		}
	};

	fetchAll = async (filter = {}) => {
		try {
			this.data.filter = filter;
			const response = await axios.get(
				`${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
			);

			return response.data;
		} catch (error) {
			return error;
		}
	};

	fetchOne = async (query) => {
		try {
			const response = await axios.get(
				`${databaseReadUrl}/${this.data.plugin_id}/${
					this.data.collection_name
				}/${this.data.organization_id}?${Object.keys(query)}=${Object.values(
					query
				)}`
			);

			return response.data;
		} catch (error) {
			return error;
		}
	};

	update = async (id, payload) => {
		try {
			this.data.payload = payload;
			this.data.object_id = id;

			const response = await axios.put(databaseWriteUrl, this.data);

			return response.data;
		} catch (error) {
			return error;
		}
	};

	delete = async (id) => {
		try {
			// delete multiple files
			let obj_id = id;
			if (obj_id instanceof Array) {
				let delItems = await Promise.all(
					obj_id.map(async (val) => {
						this.delete_data.object_id = val;
						let info = this.delete_data;
						let response = await axios.post(databaseDeleteUrl, info);
						return response.data;
					})
				);
				return delItems;
			} else {
				this.delete_data.object_id = id;
				const response = await axios.post(databaseDeleteUrl, this.delete_data);
				return response.data;
			}
		} catch (error) {
			return error;
		}
	};
}

module.exports = DatabaseConnection;

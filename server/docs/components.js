module.exports = {
	component: {
		schemas: {
			Room: {
				type: "object",
				properties: { 
					organisationId: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					roomId: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					roomName: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					roomType: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					iconUrl: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					pluginId: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					description: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					members: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
					createdAt: {
						type: "string",
						description: "Id of the rooms",
						example: "xyz",
					},
				},
			},
			Shift: {
				type: "object",
				properties: { 
					
					shiftId: {
						type: "string",
						description: "Id of the shifts",
						example: "xyz",
					},
					shiftName: {
						type: "string",
						description: "Id of the shifts",
						example: "xyz",
					},
					shiftType: {
						type: "string",
						description: "Id of the shifts",
						example: "xyz",
					},
					description: {
						type: "string",
						description: "Id of the shifts",
						example: "xyz",
					},
					members: {
						type: "string",
						description: "Id of the shifts",
						example: "xyz",
					},
					createdAt: {
						type: "string",
						description: "Id of the shifts",
						example: "xyz",
					},
				},
			},
		},
	},
};

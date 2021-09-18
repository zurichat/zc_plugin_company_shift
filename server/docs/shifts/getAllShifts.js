module.exports = {
    get: {
        tags: ["Shifts CRUD"],
        description: "Get All Shifts", 
        operationId: "getShifts",
        parameters: [],
        responses: {
          200: {
            description: "All Shifts were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Shift",
                },
              },
            },
          },
        },
      },
}
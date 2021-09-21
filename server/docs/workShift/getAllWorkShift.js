module.exports = {
    get: {
        tags: ["WorkShift CRUD"],
        description: "Get All Work Shifts", 
        operationId: "getWorkShifts",
        parameters: [],
        responses: {
          200: {
            description: "View all work shifts - Success!",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/WorkShifts",
                },
              },
            },
          },
        },
      },
}
const getAllRooms = require("./rooms/getAllRooms");
const { getInfo, getPing, getSidebar } = require("./info/info");

module.exports = {
    paths : {
        
        '/rooms/all': {
            ...getAllRooms
        },
        '/info': {
            ...getInfo
        },
        '/sidebar': {
            ...getSidebar
        },
        '/ping': {
            ...getPing
        }
    }
}
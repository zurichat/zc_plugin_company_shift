const getAllRooms = require("./rooms/getAllRooms");
const getAllShifts = require("./shifts/getAllShifts");
const { getInfo, getPing, getSidebar } = require("./info/info");

module.exports = {
    paths : {
        
        '/shifts/all': {
            ...getAllShifts
        },
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
const { version, author } = require('../../package.json')
const pluginName = 'Company employee shift Plug-In';
const { BadRequestError, UnAuthorizedError } = require('../utils/appError');
// const RealTime = require('../utils/realtime.helper');
const DatabaseConnection = require('../models/db.model');
const Rooms = new DatabaseConnection('NewRooms');
const { PLUGIN_ID } =  process.env;
const authCheck = require('../utils/authcheck');


exports.info = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  res.status(200).json({
    status: 'success',
    pluginId: PLUGIN_ID ,
    pluginName,
    pluginUrl: `${baseUrl}`,
    sidebarUrl: `${baseUrl}/api/v1/sidebar`,
    infoUrl: `${baseUrl}/api/v1/info`,
    pingUrl: `${baseUrl}/api/v1/ping`,
    description: 'An effective employee management system for creating shifts',
    author,
    version
  });
}


exports.sidebar = async (req, res) => {
  const { org, user, token } = req.query;

  if (!org || !user || !token) {
    throw new BadRequestError('One or more query parameters are missing! Valid parameters are: org, user & token.');
  }

  const isUserValidated = await authCheck(org, user, token);

  if (!isUserValidated) throw new UnAuthorizedError();

  const { data: allRooms } = await Rooms.fetchAll();

  allRooms.forEach(room => room.memberCount = room.members.length);

  // Fetch ALL public rooms
  const publicRooms = allRooms.filter(room => room.roomType === 'channel' && room.isPrivate === false);

  // Fetch rooms a user is in
  const joinedRooms = allRooms.filter(room => room.members.indexOf(user) !== -1);

  // Fetch plugin rooms
  const pluginRooms = allRooms.filter(room => room.roomType === 'plugin' && room.isPrivate === false);

  const sidebarListObject = {
    status: 'success',
    pluginId: PLUGIN_ID || '6134c6a40366b6816a0b75cd',
    pluginName,
    organisationId: org,
    userId: user,
    joinedRooms,
    publicRooms,
    pluginRooms
  }

//   await RealTime.publish('sidebar', sidebarListObject)

  res.status(200).json({ ...sidebarListObject });
}


exports.ping = (req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is running...' });
}
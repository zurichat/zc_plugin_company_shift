
module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
      title: "Employee-Shift-Management-PlugIn API", // short title.
      description: "An effective employee management system for creating shifts", //  desc.
      version: "1.0.0", // version number
      contact: {
          name: "@stephennwachukwu", // your name
          email: "stephennwac007@gmail.com", // your email
          url: "https://github.com/zurichat/zc_plugin_company_shift", // your website
      },
  },
};




// {
//   "swagger": "2.0",
//   "info": {
//     "version": "1.0.0",
//     "title": "Employee Shift Management Plugin",
//     "description": "",
//     "license": {
//       "name": "MIT",
//       "url": "https://opensource.org/licenses/MIT"
//     }
//   },
//   "host": "https://employeeshift.zuri.chat",
//   "basePath": "/api/v1",
  
//   "schemes": [
//     "http"
//   ],
//   "consumes": [
//     "application/json"
//   ],
//   "produces": [
//     "application/json"
//   ],
//   "paths":{
//     "/ping": {
//       "get": {
//         "description": "Ping the url for testing"
//       },
//       "responses": {
//         "200": {
//           "description": "Employee Shift API Success!!!",
//           "content": {
//             "application/json" : {
//               "schema": {
//                 "type": "object",
//                 "properties": {
//                   "message": {
//                     "type": "string",
//                     "description": "The response message."
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/addRoom/{orgId}": {
//       "post": {
//         "summary": "create a new room",
//         "description": "Add new room to organization",
//         "parameters": [{
//           "name": "room_title",
//           "in": "body",
//           "description": "The name of the room to create",
//           "schema": {
//             "required": ["room_title"],
//             "properties": {
//               "room_title": {
//                 "type": "string"
//               }
//             }
//           }
//         }, 
//         {
//           "name": "orgId",
//           "in": "path",
//           "required": true,
//           "description": "The organization Id to add room to",
//           "type": "string"
//         }],
//         "responses": {
//           "200": {
//             "description": "Room added successfully"
//           }
//         }
//       }
      
      
//     }
//   }
// }
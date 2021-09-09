### **BackEnd Structure**

The Back-end is structured using the Model -View - Controller pattern. Since this is just the API, the View part will be handled with React. 


**DB** - This should be zc_core Database API
****


### **Folder Structure**
For this project, our concern should be the `server` folder.
Naming of files should be in respect to the folder the file is located in. E.G: **controllers**: filename.controller.js
```
├── server/
|   |__ src
|   |   |
|   │   ├── controllers/
|   │   │   ├── sidebar.controller.js
|   │   │   ├── ....
|   │   ├── middlewares/
|   │   │   ├── ....
|   │   │   ├── ....
|   │   ├── models/
|   │   │   ├── ....
|   │   │   ├── ....
|   │   ├── routes/
|   │   │   ├── sidebar.routes.js
|   │   │   ├── ....
|   │   │   ├── ....
|   │   ├── utils/
|   │   │   ├── ....
|   │   │   ├── ....
|   |   |___ server.js
├── ....
```

This is the setup for now. We add more as we move along the project
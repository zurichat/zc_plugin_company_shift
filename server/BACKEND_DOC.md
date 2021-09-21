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
|   |   |__ config/
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
|   |__ docs
├── |__ server.js
|
|
```

Since were using Model-Controller pattern (instead of the usual MVC), we have the `models` folder & the `controllers` folder along side three other folders: the `middlewares`, the `routes` & the `utils` folders. To get a proper grasp of how everything works together, open up the `server.js` file. You'll see the third-party modules and middlewares that were "required" or imported. You can then checking the files in the `backend` folder and what they're exporting.


### **Models**


require('dotenv').config()
const express = require('express');
const path = require('path');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express")

const swaggerDocument = require("./docs/swagger.json")

const addRoom = require('./src/routes/addRoom.routes')

const app = express();

const PORT = process.env.PORT || 5356;


app.use(express.static(path.join(__dirname, "..", "client", "build")));

//ROUTES
app.use('/api/v1/', addRoom)

//api documentation
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/api/V1/ping', (req,res)=> {
  return res.json({
    message: 'Employee Shift API Success!!!'
  })
})



//render react app index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));


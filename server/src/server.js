require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const sideBar = require('./routes/sidebar.routes')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5356

app.use(express.static(path.join(__dirname, "..", "client", "build")))

// app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/ping", (req, res) => res.json({
	message: "Employee Shift API Success!!!",
}))

app.use('/sidebar', sideBar)

// app.get("/sidebar", (req, res) => res.json({
// 	message: "Sidebar API!!!",
// }))

// render react app index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

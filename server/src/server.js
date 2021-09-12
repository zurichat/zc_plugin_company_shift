require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const swaggerUi = require("swagger-ui-express")
// swagger doc installed
// const   swaggerJsdoc = require("swagger-jsdoc")
const swaggerDocument = require("../swagger.json")

// API ROUTES - THE FIRST 3 WILL COME FROM ZURI MAIN, THE LAST TWO WILL COME FROM OUR PLUGIN
const auth = require("./routes/auth.routes") // authentication route - to be fetched from zuri_core
const users = require("./routes/users.routes") // users routes - to be fetched from zuri_core
const org = require("./routes/org.routes") // organisation end point from Zuri_core
const sideBar = require("./routes/sidebar.routes") // sidebar endpoint 

const workShift = require("./routes/workShift.routes") // workShif route - create, post, edit and delete shift
const info = require("./routes/info.routes") // info endpoint contains information about our plugin

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5356

app.use(express.static(path.join(__dirname, "..", "client", "build")))
// app.use(express.static(path.join(__dirname, 'build')));
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.get("/api/ping", (req, res) => res.json({
	message: "Employee Shift API Success!!!",
}))

// API URL
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
app.use('/api/v1/org', org)
app.use('/api/v1/sidebar', sideBar)

app.use('/api/v1/workshift', workShift)
app.use('/api/v1/info', info)


// render react app index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const helmet = require("helmet")
const swaggerUi = require("swagger-ui-express")

const addRoom = require("./src/routes/addRoom.routes")

const swaggerDocument = require("./swagger.json")


const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: "false"}))


const PORT = process.env.PORT || 5356

app.use(express.static(path.join(__dirname, "..", "client", "build")))

// api document
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//====================== ROUTES ======================== 
app.use("/api/v1", addRoom)

app.get("/api/ping", (req, res) => res.json({
	message: "Employee Shift API Success!!!",
}))


// render react app index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

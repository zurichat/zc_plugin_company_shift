require("dotenv").config()
const express = require("express")
const path = require("path")
const cors = require("cors")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5356

app.use(express.static(path.join(__dirname, "..", "client", "build")))

// app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/ping", (req, res) => res.json({
	message: "Employee Shift API Success!!!",
}))

// categories employees roles api issue #97
app.get("/api/users", (req, res) => res.json([
	{
		id: 1,
		name: "Ushahemba Shir",
		title: "Back end dev",
	},
	{
		id: 2,
		name: "Solomon Ifianyi",
		title: "Back end dev",
	},
	{
		id: 3,
		name: "Depecode",
		title: "Front end dev",
	},
	{
		id: 4,
		name: "John",
		title: "Dev ops",
	},
]))

// render react app index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

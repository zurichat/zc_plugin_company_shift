require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());

const swaggerUi = require("swagger-ui-express");
const swaggerJsDocs = require("swagger-jsdoc");
require("./routes/shift.routes")(app);
app.use(cors());

const db = require("./models/model");
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the database!");
	})
	.catch((err) => {
		console.log("Cannot connect to the database!", err);
		process.exit();
	});
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "shift API",
			version: "1.0.0",
			description: "shift api",
		},
		servers: [
			{
				url: "http://localhost:5356",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDocs(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5356;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

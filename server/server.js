require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
app.use(cors());
app.use(express.json());

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

// app.use(express.static(path.join(__dirname, "..", "client", "build")));
// app.use("/files", express.static("files"));

//app.use(express.static(path.join(__dirname, 'build')));
// app.get("/", (req, res) => res.send("hello"));

// app.get("/api", (req, res) => {
// 	return res.json({
// 		message: "Employee Shift API Success!!!",
// 	});
// });

// categories employees roles api issue #97
// app.get("/api/users", (req, res) => {
// 	return res.json([
// 		{
// 			id: 1,
// 			name: "Ushahemba Shir",
// 			title: "Back end dev",
// 		},
// 		{
// 			id: 2,
// 			name: "Solomon Ifianyi",
// 			title: "Back end dev",
// 		},
// 		{
// 			id: 3,
// 			name: "Depecode",
// 			title: "Front end dev",
// 		},
// 		{
// 			id: 4,
// 			name: "John",
// 			title: "Dev ops",
// 		},
// 	]);
// });

//render react app index.html

require("./routes/shift.routes")(app);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5356;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

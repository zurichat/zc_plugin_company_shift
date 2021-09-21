require("colors");
require("dotenv").config();
require("express-async-errors");

const path = require("path");
const cors = require("cors");
const cpus = require("os").cpus();
const cluster = require("cluster");
const express = require("express");

const app = express();
const router = express.Router();

const rootRouter = require("./src/routes/index")(router);
const isProduction = process.env.NODE_ENV === "production";
const ErrorHandler = require("./src/middlewares/errorHandler");

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/build")));

if (isProduction) {
	app.set("trust proxy", 1); // Trust first proxy
} else {
	app.use(require("morgan")("dev")); // Dev logging middleware
}

app.use("/api/v1", rootRouter); // For mounting the root router on the specified path

// All other GET requests not handled before will return our React app
app.use((req, res, next) => {
	res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
	res.header("Expires", "-1");
	res.header("Pragma", "no-cache");
	res.sendFile(path.join(__dirname, "../client/build", "index.html")); 
});

// For handling server errors and all other errors that might occur
app.use(ErrorHandler);

(async () => {
	if (cluster.isMaster) {
		// Fork workers
		cpus.forEach(() => cluster.fork());

		cluster.on("exit", () => cluster.fork());
	} else {
		// Workers can share any TCP connection
		// In this case, it is an HTTP server
		const port = process.env.PORT || 5356;
		const server = app.listen(port, () => {
			console.log(
				":>>".green.bold,
				"Server running in".yellow.bold,
				(process.env.NODE_ENV || "production").toUpperCase().blue.bold,
				"mode, on port".yellow.bold,
				`${port}`.blue.bold
			);
		});

		// Handle unhandled promise rejections
		process.on("unhandledRejection", (error) => {
			// console.log(error);
			console.log(`✖ | Unhandled Rejection: ${error.message}`.red.bold);
			server.close(() => process.exit(1));
		});
	}
})().catch((error) => {
	console.log(`✖ | Error: ${error.message}`.red.bold);
});

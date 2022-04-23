// Import express framework
const express = require("express");

// Import middleware
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

// Import routes
const searchRoute = require("./routes/searchRoute");
const movieRoute = require("./routes/movieRoute");
const tvRoute = require("./routes/tvRoute");

// Setup default port
const port = process.env.PORT || 4000;
console.log(process.env.PORT);
// Create express app
const app = express();

// Implement middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
//   app.get("*", (req, res) => {
//     res.sendFile("build/index.html", { root: __dirname });
//   });
// }

app.use("/api", searchRoute);
app.use("/api", movieRoute);
app.use("/api", tvRoute);

app.listen(port, () => {
  console.log(`minfo-backend listening on port ${port}`);
});

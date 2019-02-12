const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mainRoute = require("./routes/mainRoute");

const app = express();

//Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1", mainRoute);

app.use((req, res) => {
    res.status(404).json({ error: "Page unaivalable" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.info(`The app has started on port ${PORT}`);
});
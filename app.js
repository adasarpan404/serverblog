const express = require("express");
const morgan = require("morgan");
const PostRoutes = require("./routes/PostRoutes")
const app = express();
app.use(express.json())

app.use('/api/v1/post', PostRoutes)

module.exports = app;

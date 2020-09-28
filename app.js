const express = require("express");
const morgan = require("morgan");
const PostRoutes = require("./routes/PostRoutes");
const UserRoutes = require("./routes/UserRoutes");
const app = express();
app.use(express.json());

app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/users", UserRoutes);
module.exports = app;

const express = require('express');
const morgan = require('morgan');
const PostRoutes = require('./routes/PostRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AppError = require('./utils/AppError');
const app = express();
app.use(express.json());

app.use('/api/v1/post', PostRoutes);
app.use('/api/v1/users', UserRoutes);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
module.exports = app;

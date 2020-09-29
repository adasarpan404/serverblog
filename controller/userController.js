const handleFactory = require('./handleFactory');
const User = require('./../Models/userModel');

exports.getAllUser = handleFactory.getAll(User);
exports.createUser = handleFactory.createOne(User);
exports.getUser = handleFactory.getOne(User);
exports.updateUser = handleFactory.updateOne(User);
exports.deleteUser = handleFactory.deleteOne(User);

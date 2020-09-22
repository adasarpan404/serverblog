const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "user must have email"],
    unique: [true, "this email is already in use"],
    validate: [validator.isEmail, "please provide correct email"],
  },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "a user must have a password"],
    minlength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "you have to retype a previous password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "password are not the same",
    },
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;

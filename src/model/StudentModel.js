const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  Name: String,
  Rool: String,
  Class: String,
  Rearks: String,
  Phone: {
    type: String,
    validate: {
      validator: function (value) {
        return /^([01]|\+88)?\d{11}/.test(value);
        // if (value === 11) {
        //   return true;
        // } else {
        //   return false;
        // }
      },
      message: "invalid mobile number",
    },
  },
});

const StudentModel = mongoose.model("students", StudentSchema);

module.exports = StudentModel;

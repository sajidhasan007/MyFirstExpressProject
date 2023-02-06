const StudentModel = require("../model/StudentModel");

// create student
exports.InsertData = (req, res) => {
  const bodyData = req.body;
  StudentModel.create(bodyData, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(201).json({ status: "success", data: data });
    }
  });
};

// read students

exports.ReatStudents = (req, res) => {
  const query = { Name: "Sajid Hasan" };
  const projection = "Name Rool Class Remarks";
  StudentModel.find(query, projection, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// update student

exports.UpdateStudent = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const UpdateData = req.body;

  StudentModel.updateOne(query, UpdateData, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

exports.DeleteStudent = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  StudentModel.remove(query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

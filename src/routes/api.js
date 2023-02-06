const express = require("express");
const HelloController = require("../controllers/HelloController");
const { InsertData, ReatStudents, UpdateStudent, DeleteStudent } = require("../controllers/StudentsController");
const { TokenGenerator } = require("../controllers/tokenController");
const { VirifyToken } = require("../middleWare/virifyToken");

const router = express.Router();

router.get("/hello-get", VirifyToken, HelloController.Hello1);
router.post("/hello-post", VirifyToken, HelloController.Hello2);

router.post("/add-students", VirifyToken, InsertData);
router.get("/read-students", VirifyToken, ReatStudents);
router.post("/update-students/:id", VirifyToken, UpdateStudent);
router.delete("/delete-students/:id", VirifyToken, DeleteStudent);
// router.delete

router.get("/get-token", TokenGenerator);

module.exports = router;

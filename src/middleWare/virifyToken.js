var jwt = require("jsonwebtoken");

exports.VirifyToken = (req, res, next) => {
  const token = req.headers["token-key"];
  //   console.log(token);
  //   next();
  jwt.verify(token, "sajid123", function (err, decoded) {
    if (err) {
      res.status(401).json({ data: err });
    } else {
      next();
    }
  });
};

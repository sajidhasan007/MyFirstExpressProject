var jwt = require("jsonwebtoken");
exports.TokenGenerator = (req, res) => {
  const token = jwt.sign(
    {
      data: {
        userName: "sajidhasan007",
        password: "123456789",
      },
    },
    "sajid123",
    { expiresIn: 24 * 60 * 60 }
  );
  res.status(200).json({ status: "success", data: { token } });
};

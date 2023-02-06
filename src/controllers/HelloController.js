exports.Hello1 = (req, res) => {
  res.status(200).json({ status: "success", data: "this is get api response" });
};

exports.Hello2 = (req, res) => {
  res.status(200).json({ status: "success", data: "this is post api response" });
};

const service = require("../services/projects.service");
const auth = require("../utils/auth");

const getPosts = async (req, res) => {
  const limit = req.body.limit || 12;
  const result = await service.getProjects(limit);
  if (!result) {
    res.send({ success: false });
  }
  res.send({ success: true, projects: result });
};

const addPost = async (req, res) => {
  const token = req.body.token || "-1";
  if (auth.verify(token)) {
    const result = await service.addProject(req.body.data);
    if (result) res.send({ success: true });
  } else {
    res.send({
      success: false,
      message: "Token Probably not valid :( or there was a proplem inserting"
    });
  }
};

module.exports = {
  getPosts,
  addPost
};

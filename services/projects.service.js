const Project = require("../db/models/project");
// const Op = require("sequelize").Op;
const getProjects = async limit => {
  try {
    const result = await Project.find()
      .limit(limit)
      .sort({ createdAt: -1 });
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const addProject = async data => {
  try {
    const newProject = new Project({ ...data, createdAt: Date.now() });
    const result = await newProject.save();
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getProjects, addProject };

const { Project } = require("../db/models");
const Op = require("sequelize").Op;

const getProjects = async limit => {
  try {
    const result = await Project.findAll({
      limit,
      order: [["createdAt", "DESC"]]
    });
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const addProject = async data => {
  try {
    const result = await Project.create(data);
    return result;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getProjects, addProject };

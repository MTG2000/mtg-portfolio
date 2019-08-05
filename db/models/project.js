"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      url: DataTypes.STRING,
      code: DataTypes.STRING,
      tags: DataTypes.STRING
    },
    {}
  );
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};

let mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({
  name: {
    type: String
  },
  img: {
    type: String
  },
  url: {
    type: String
  },
  code: {
    type: String
  },
  tags: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Project", projectSchema);

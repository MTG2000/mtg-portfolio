const router = require("express").Router();
const controller = require("../controllers/projects.controller");

router.get("/", controller.getPosts);

router.post("/add", controller.addPost);

module.exports = router;

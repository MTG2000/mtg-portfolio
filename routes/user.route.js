const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/login", controller.login);

router.post("/verify", controller.verify);

module.exports = router;

const express = require("express");
const UserCtrl = require("../controllers/user.controller");

//  CREAT ROUTER MIDDLEWARE
const router = express.Router();

router.post("/", UserCtrl.insert);
// router.post("/auth", UserCtrl.authenticate);
// router.put("/:id", UserCtrl.update);
// router.delete("/:id", UserCtrl.delete);
// router.get("/:id", UserCtrl.getOne);
// router.get("/", UserCtrl.getAll);
//  export router missleware

module.exports = router;

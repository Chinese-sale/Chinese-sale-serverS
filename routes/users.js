const router = require("express").Router();
const usersController = require("../controlers/users");

router.get("", usersController.getAllItemsOrders);
router.post("", usersController.addUser);
router.post("", usersController.addOrder);


module.exports = router;

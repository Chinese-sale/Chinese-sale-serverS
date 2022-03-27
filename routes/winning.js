const router = require("express").Router();
const winningController = require("../controlers/winning");

router.get("/:id", winningController.GetAllUserByIdItem);
router.get(":id", winningController.GetUserByIdWinning);
router.get("/:id", winningController.GetUserByIdItem);
router.post("", winningController.addWinning);

module.exports = router;

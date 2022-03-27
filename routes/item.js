const router = require("express").Router();
const itemVontroller = require("../controlers/item");

router.get("", itemVontroller.getAllItems);
router.get("/byId/:id", itemVontroller.getAllItemsById);
router.delete("/:id", itemVontroller.removeItem);
// router.get("/:id", bookVontroller.getAllBooks);
router.post("", itemVontroller.addItem);

module.exports = router;
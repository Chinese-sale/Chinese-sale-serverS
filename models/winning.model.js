const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  user_id:{ type: mongoose.Types.ObjectId, ref: "users"},
  item_id:{ type: mongoose.Types.ObjectId, ref: "items"},
  winning_data:{ type: Date, default: Date.now() }
});

const Winning = mongoose.model("Winning", authorSchema);
module.exports = { Winning, WinningSchema };

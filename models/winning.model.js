const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  user_id:{ type: mongoose.Types.ObjectId, ref: "books"},
  item_id:{ type: mongoose.Types.ObjectId, ref: "books"},
  winning_data:{ type: Date, default: Date.now() }
});

const Author = mongoose.model("authors", authorSchema);
module.exports = { Author, authorSchema };

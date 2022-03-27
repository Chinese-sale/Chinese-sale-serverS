// const mongoose = require('mongoose');
// const itemSchema = new mongoose.Schema({
//     id:string
// })

const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
     id:String,
     item_name:String,
     item_description:String,
     item_price:Number,
     arr_users:[{
         type:mongoose.Types.ObjectId,
         ref:"users"
     }]
})

const Item = mongoose.model("items",itemSchema);
module.exports={Item,itemSchema};
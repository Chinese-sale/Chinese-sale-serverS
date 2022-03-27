const {  mongoose } = require("mongoose")
const UsersSchema=new mongoose.Schema(
    {
        user_first:String,
        user_last_name:String,
        user_phone:String,
        arr_orders:[OrderSchema]
    }
)

const Users=mongoose.model("users",UsersSchema)
module.exports={Users,UsersSchema}

const OrderSchema=new mongoose.Schema(
    {
        item_id:String,
        item_name:String,
        item_description:String,
        price:Number
    }
)

const Order=mongoose.model("orders",OrderSchema)
module.exports={Order,OrderSchema}
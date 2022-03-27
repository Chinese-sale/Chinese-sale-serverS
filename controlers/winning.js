const  Winning = require("../models/winning.model").Winning;
const  Item = require("../models/Item.model").Item;

module.exports.addWinning=async (req, res) =>{
    let winning=req.body;
    let a = new Winning(winning);
    try {
        await a.save();
        console.log(a);
        return res.send(a);
    }
    catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }

}
module.exports.GetAllUserByIdItem=async (req, res) =>{
    let users=req.params.arr_users;
        return res.send(users);
}
module.exports.GetUserByIdWinning=async (req, res) =>{
    let user=await Winning.findByID(req.body).populate("user_id");
    return res.send(user);

}
module.exports.GetUserByIdItem=async (req, res) =>{
    let user=await Winning.find({"item_id.id":req.body}).populate("user_id");
    return res.send(user);

}

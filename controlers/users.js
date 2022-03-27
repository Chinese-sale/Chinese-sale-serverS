const { Users } = require("../models/users.model").Users;
const { Order } = require("../models/users.model");
module.exports.addUser = async (req, res) => {
    let user = req.body;
    let u = new Users(user);
    try {
        await u.save();
        console.log(u);
        return res.send(u);
    }
    catch (use) {
        console.log(use);
        return res.status(400).send(use)
    }
}

module.exports.getAllItemsOrders = async (req, res) => {
    let userId = req.params.id;
    try {
        let arrItems = Users.findById(userId).arr_orders;
        return res.send(arrItems);
    }
    catch (uid) {
        console.log(userId);
        return res.status(400).send(uid)
    }
}

module.exports.addOrder = async (req, res) => {
    let order = req.body;
    let { userId, ...o } = order
    try {
        let o = new Order(o);
        let use = await Users.findById(userId);
        if (!use) {
            use.arr_orders.push(o)
            this.addUser(use)
        }
        else {
            o.arr_orders.push(use)
        }
        await o.save();
        console.log(o);
        return res.send(o)
    }
    catch (e) {
        console.log(e)
        return res.status(400).send(e);
    }
}
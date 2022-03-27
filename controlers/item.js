const {Item}=require("../models/item.model");

module.exports.addItem=async(req,res)=>{
    let item = req.body;
    let temp= new Item(item)
    try{
        await temp.save()
        console.log(temp)
        return res.send(temp);
    }
    catch(error){
        console.log(e)
        return res.status(400).send(error)
    }
}
module.exports.removeItem=async(req,res)=>{
    let itemId=req.params.id;

    try {
        const temp=await Item.findByIdAndRemove(itemId);
        console.log(temp);
        return res.send(temp)
    }
    catch(error) {
        console.log(error)
        return res.status(400).send(error);
    }
}
module.exports.getAllItems=async (req,res)=>{
   
    let items = await Item.find({});
    return res.send(items)
}
module.exports.getAllItemsById=async (req,res)=>{
    let id = req.params.id;
    let item = await Item.find({"item.id":id});
    return res.send(item);
}

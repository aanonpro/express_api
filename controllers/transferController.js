const transferModel = require('../models/transfer');
const userModel = require('../models/user');


const createTransfer = async (req, res) => {
   
    const user = await userModel.findOne();
    const sender_id = user.id;
    const recieve_id = req.body.recieve;
     
    const sender_amount = await userModel.findOne({where: {id: sender_id}}); 
    
    //check for reciever money
    const recieve_amount = await User.findOne({where: {id: recieve_id}});
    const getbalance = recieve_amount.balance - 0; // 0 for it's int
  
    const mybalance = sender_amount.balance;
  
    if(mybalance<req.body.amount){
      res.send('your balance can not make transaction');
    } 
    else{      
      // if(sender.amount !==req.body.amount){
      const transfer = {
        balance: mybalance - req.body.amount,
      }
      await userModel.update(transfer, {where: {id: sender_id}});
      // res.send(minimize)
        
      const input = {
        balance: getbalance + (req.body.amount - 0),
      };
      await userModel.update(input, {where: {id: recieve_id}});
      
      var datatransfer = {
        sender_id: req.params.id,
        recieve_id: req.body.recieve,
        amount: req.body.amount,
        remark: req.body.remark,
      }
      await Transfer.create(datatransfer);   
      res.redirect('/transfer'); 
    }
    

}

const updateTransfer = async (req, res) => {
   

}

const deleteTransfer = async (req, res) => {

   

}

const getTransfer = async (req, res) => {

    // const user = await userModel.findOne();

    // // var user = await User.findOne({where: {id:req.params.id}});
    // var transfer = await Transfer.findAll({where: {sender_id: user.id }});
    
    // res.render('./transfer',{transfer: transfer, user: user});
    res.send('hi transfer');
  
}

module.exports = {
    createTransfer,
    updateTransfer,
    deleteTransfer,
    getTransfer,
}
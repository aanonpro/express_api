var express = require('express');
var router = express.Router();

const Transfer = require('../models/transfer');
const User = require('../models/addUser');

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  var user = await User.findOne({where: {id:req.params.id}});
  var transfer = await Transfer.findAll({where: {sender_id: user.id }});

  res.render('./transfer',{transfer: transfer, user: user});
  // res.send(transfer);
  
});

// create transaction
router.get('/create/:id', async (req, res) =>{
  const auth = await User.findByPk(req.params.id);
  res.render('./transfer/create', {auth: auth});
});

// store transfer 
router.post('/store/:id', async (req, res, next) => {

  const sender_id = req.params.id;
  const recieve_id = req.body.recieve;
   
  const sender_amount = await User.findOne({where: {id: sender_id}});

  
  //check for reciever money
  const recieve_amount = await User.findOne({where: {id: recieve_id}});
  const getbalance = recieve_amount.balance - 0; // 0 for it's int

  const mybalance = sender_amount.balance;

  if(mybalance<req.body.amount){
    res.send('your balance can not make transaction');
  } 
  else{      
    // if(sender.amount !==req.body.amount){
    const minimize = {
      balance: mybalance - req.body.amount,
    }
    await User.update(minimize, {where: {id: sender_id}});
    // res.send(minimize)
      
    const input = {
      balance: getbalance + (req.body.amount - 0),
    };
    await User.update(input, {where: {id: recieve_id}});
    // res.send(input);
    // store in transfer
    var datatransfer = {
      sender_id: req.params.id,
      recieve_id: req.body.recieve,
      amount: req.body.amount,
      remark: req.body.remark,
    }
    await Transfer.create(datatransfer);   
    res.render('./transfer/'); 
  }
});

// routes view
router.get('/view/:id', async (req, res, next) => {
  // var user = await User.findOne({where: {id: req.params.id}});
  var getView = await Transfer.findByPk(req.params.id);
  res.render('./transfer/view', {getView: getView});
})

// edit users
router.put('/update/:id', async (req, res, next) => {
  const id = req.params.id;
  var transfer = {
    recieve_id: req.body.recieve,
    balance: req.body.amount,
    remark: req.body.remark
  }
  await Transfer.update(transfer, {where:{id: id}});
  // res.send({
  //   message: "user was updated successfully."
  // });
  res.status(200).json({
    status: 200 + "updated success",
    data: input
  })  

});

module.exports = router;

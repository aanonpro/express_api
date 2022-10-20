var express = require('express');
var router = express.Router();

const AddUser = require('../models/addUser');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var getUser = await AddUser.findAll();
  res.render('./users', {getUser: getUser});
});

// create user
router.get('/create', (req, res) =>{
  res.render('./users/create');
});

// store user 
router.post('/store', async (req, res, next) => {
  var input = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    balance: req.body.balance
  }
  await AddUser.create(input);
  // res.send(input);
  res.status(200).json({
    status: 200 + " user created success",
    data: input
  })  

  res.render('./users');
});

// edit users
router.put('/update/:id', async (req, res, next) => {
  const id = req.params.id;
  var input = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    balance: req.body.balance
  }
  await AddUser.update(input, {where:{id: id}});
  // res.send({
  //   message: "user was updated successfully."
  // });
  res.status(200).json({
    status: 200 + "updated success",
    data: input
  })  

});

module.exports = router;

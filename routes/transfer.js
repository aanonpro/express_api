// var express = require('express');
// var router = express.Router();

// const Transfer = require('../models/transfer');
// const User = require('../models/addUser');

// /* GET users listing. */


// // create transaction
// router.get('/create/:id', async (req, res) =>{
//   const auth = await User.findByPk(req.params.id);
//   res.render('./transfer/create', {auth: auth});
// });



// // routes view
// router.get('/view/:id', async (req, res, next) => {
//   // var user = await User.findOne({where: {id: req.params.id}});
//   var getView = await Transfer.findByPk(req.params.id);
//   res.render('./transfer/view', {getView: getView});
// })

// // edit users
// router.put('/update/:id', async (req, res, next) => {
//   const id = req.params.id;
//   var transfer = {
//     recieve_id: req.body.recieve,
//     balance: req.body.amount,
//     remark: req.body.remark
//   }
//   await Transfer.update(transfer, {where:{id: id}});
//   // res.send({
//   //   message: "user was updated successfully."
//   // });
//   res.status(200).json({
//     status: 200 + "updated success",
//     data: input
//   })  

// });

// module.exports = router;

const express = require('express');
const { createTransfer, getTransfer, deleteTransfer, updateTransfer} = require('../controllers/transferController');
const auth = require('../middleware/auth');
const transferRouter = express.Router();

transferRouter.get('/', auth, getTransfer);

transferRouter.post('/', auth, createTransfer );

transferRouter.delete('/:id', auth, deleteTransfer);

transferRouter.put('/:id', auth, updateTransfer);

// transferRouter.get('/login', function(req, res, next) {
// //   res.render('auth/signin');
// res.json({message: "transfer needed login please"})
// });

module.exports = transferRouter;

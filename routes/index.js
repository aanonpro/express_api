const express = require('express');
const router = express.Router();
// const auth = require("../controllers/userController");
const User = require('../models/user')
const auth = require('../middleware/auth')

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  res.send('hii');
});

// router.post('/store', async function(req, res,next) {
//   var input = {
//     user_id : 1,
//     recieve_account : req.body.acc_number,
//     paid_amount : req.body.amount,
//     remark : req.body.remark,
//   }
//   await User.create(input);
//    res.redirect('/index');

// });

router.get('/login', function(req, res, next) {
  res.render('auth/signin');
})



module.exports = router;

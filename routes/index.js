const express = require('express');
const router = express.Router();
const auth = require("../controllers/userController");
const User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index', { title: 'Express' });
});

router.post('/store', async function(req, res,next) {
  var input = {
    user_id : 1,
    recieve_account : req.body.acc_number,
    paid_amount : req.body.amount,
    remark : req.body.remark,
  }
  await User.create(input);
   res.redirect('/index');

});


module.exports = router;

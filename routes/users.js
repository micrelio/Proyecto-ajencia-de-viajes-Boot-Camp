var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// router.get('/users', (req, res) => {
//   User.find({}).then(users => {
//       res.send(users)
//   }).catch(err => {
//       res.status(500).send(err)
//   })
// });
module.exports = router;

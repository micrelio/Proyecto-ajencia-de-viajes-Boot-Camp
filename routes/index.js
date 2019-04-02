var express = require('express');
var router = express.Router();


/*localhost:3000/    */
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });

// });

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render( 'menu');
   
  //  res.render('footer');
  
  
});


// const hbsUtils = require ('hbs-utils')(hbs);
// hbs.registerPartials('/partials');
// hbsUtils.registerWatchedPartials('/partials')


// const hbsUtils = require ('hbs-utils')(hbs);
// hbs.registerPartials(`/views/partials`);
// hbsUtils.registerWatchedPartials(`/views/partials`)


module.exports = router;









  

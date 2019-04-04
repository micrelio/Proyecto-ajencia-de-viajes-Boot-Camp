var express = require('express');
var router = express.Router();


/*localhost:3000/    */
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });

// });

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render( 'index');
});

router.get( '/registro', function ( req, res, next ) {

  res.render( 'registro', { title: 'Login' } );
} );

module.exports = router;









  

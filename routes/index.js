var express = require('express');
var router = express.Router();

const winston = require( '../config/winston.js' );

/*localhost:3000/    */
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('uuuuuuuuuuuuuuuuu');
  
  res.render('index', { title: 'Express' });

});



router.get( '/login', function ( req, res, next ) {
 //console.log(req.body);
 
  
  res.render( 'login' );
 
  
} );


router.get( '/registro', function ( req, res, next ) {
 res.render('registro');
} );








// router.post( '/menu', function ( req, res, next ) {
//   console.log( 'AAAAAAAAAAAAAAA' );
//   console.log( req.body );
  
//           } );

module.exports = router;









  

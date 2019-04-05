var express = require('express');
var router = express.Router();


/*localhost:3000/    */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

// router.get('/', function(req, res, next) {
//   // res.render('main', { title: 'Express' });
//   res.render( 'main');
// });
//res.render('home', {layout: 'default', template: 'home-template'});


// router.get('/', function(req, res, next) {
  //console.log(res.body);
  // res.render('index');
  // res.render('main', {layout: 'layout', template: 'main-template'});
// });


router.get( '/login', function ( req, res, next ) {
 //console.log(req.body);
 if (1>0) {
  res.render( 'login' );
 }
  
} );


// router.get( '/login', function ( req, res, next ) {
// console.log(res);
//  res.render('login');
// res.render('login');


  // res.render( 'login', { title: 'Login' } );
// } );








// router.post( '/menu', function ( req, res, next ) {
//   console.log( 'AAAAAAAAAAAAAAA' );
//   console.log( req.body );
  
//           } );

module.exports = router;









  

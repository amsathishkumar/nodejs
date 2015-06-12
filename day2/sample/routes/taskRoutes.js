var express = require('express');
var router = express.Router();
var tasklist = ['ss','ss1']
/* GET tasklisting. */
router.get('/', function(req, res, next) {
 // res.send('All task');
   res.render('tasks/index',{layout:'tasks/layout',tasks : tasklist}); 
});

module.exports = router;

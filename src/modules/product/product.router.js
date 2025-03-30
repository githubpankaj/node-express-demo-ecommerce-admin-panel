const express = require('express');
const router = express.Router();

router.get('/add', function(request, response){
  response.status(200).send('Product add router').end();
})

module.exports = router;
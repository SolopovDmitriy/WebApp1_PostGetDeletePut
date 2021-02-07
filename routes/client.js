var express = require('express');
var router = express.Router();

router.get('/surname/:x/name/:y', (request, response) =>{  //
    response.status(200).send('hello ' + "name: " + request.params.y + " surname: " + request.params.x ); // hello Anna age: 44
});


router.get('/:x', (request, response) =>{  //
    response.status(200).send('good bye '); // hello Anna age: 44
});

module.exports = router;
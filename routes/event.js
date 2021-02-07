var express = require('express');
var router = express.Router();
var Event = require('../models/Events');

/* GET users listing. */

router.get('/', (request, response) =>{  // http://localhost:3000/event/
    var eventModel = new Event();

    eventModel.getAll(function (allEvents) {
        var str = allEvents.reduce((accumulator, currentValue) => accumulator + currentValue.name +  ", ", "all events: ");
        response.status(200).send(str);
    });
});

router.get('/age/:x/name/:y', (request, response) =>{  // http://localhost:3000/event/age/44/name/Anna
    response.status(200).send('hello ' + request.params.y + " age: " + request.params.x ); // hello Anna age: 44
});


router.get('/:id', (request, response) =>{  // http://localhost:3000/event/2
    var eventModel = new Event();
    let eventId = parseInt(request.params.id, 10);   //  eventId = 1;  request.params.id = "1"

    eventModel.getById(eventId, function (event) {
        if(event)
            response.status(200).send('id = ' + event.id + ", name = " + event.name);
        else
            response.status(200).send("Event not found");

    });  
});


router.post('/:id', (request, response) =>{
    var eventModel = new Event();
    let eventId = parseInt(request.params.id, 10);
    let eventName = request.body.name;
    eventModel.create(eventId, eventName, function (result) {
        if(result)
            response.status(200).send('one row created');
        else
            response.status(200).send('not created');
    });
});



router.put('/:id', (request, response) =>{
    response.status(200).send('one row updated:' + request.params.id);
});


router.delete('/:id', (request, response) =>{
    var eventModel = new Event();
    let eventId = parseInt(request.params.id, 10);
    eventModel.deleteById(eventId, function (result) {
        if(result)
            response.status(200).send('one row deleted');
        else
            response.status(200).send('not deleted');
    })


});


module.exports = router;
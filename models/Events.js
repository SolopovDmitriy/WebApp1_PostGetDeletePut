const BasicDB = require('../core/BasicDB');

class Event extends BasicDB{
    constructor() {
        super('events');
    }

    getById(eventId, callback){        
        this.getOneRow({id: eventId}, function (myEvent) {
            if (typeof  callback === 'function'){
                callback(myEvent);
            }
        });       
    }

    getAll(callback){
        this.getAllRows({}, 0, 1000, 'name', 'ASC', function (allEvents) {
            if (typeof  callback === 'function'){
                callback(allEvents);
            }
        });
    }

    create(id, name, callback){
        this.insertOneRow({id: id, name : name}, function (result) {
            if (typeof  callback === 'function'){
                callback(result);
            }
        });
    }

    deleteById(eventId, callback){
        this.deleteOneRow({id: eventId}, function (result) {
            if (typeof  callback === 'function'){
                callback(result);
            }
        });
    }
    
}

module.exports = Event;

// for testing
// var event1 = new BasicDB('events');
// event1.getOneRow({id:2}, function(row){
//     console.log(row);   
// });
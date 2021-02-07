'use strict';

let CONFIG = {
    DB:{
        LOGIN:'admin',
        PASSWORD:'passw0rd',
        HOST:'localhost',
        PORT:'27017',
        BASENAME:'test'
    }
}

CONFIG = Object.freeze(CONFIG);

module.exports = CONFIG;
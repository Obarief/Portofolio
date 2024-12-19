// import fs from 'fs'
// const rs = fs.createReadStream('nyoba.txt')

// rs.on('open', () => {
//     console.log('file is opened');
//     })

import events from 'events';
const eventEmitter = new events.EventEmitter();

// buat event 
const scream = () => {
    console.log('TERIAK!');
}

// masukkan event scream ke eventEmitter 
eventEmitter.on('scream', scream); // scream 1 = untuk eventnya, scream 2 = untuk functionnya

// picu event screamnya
eventEmitter.emit('scream');
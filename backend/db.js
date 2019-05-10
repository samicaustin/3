
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/queer-rex';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Backend connected to ${connectionString}`)
});

mongoose.connection.on('error', (err) => {
    console.log(`Backend ${err}`)
});

mongoose.connection.on('disconnected', () => {
    console.log(`Disconnected! AUGH!`)
});
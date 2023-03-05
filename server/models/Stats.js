const {Schema, model} = require('mongoose');

const statsSchema = new Schema({

        attack: {
            type: Number,
            require: false
        },
        defense: {
            type: Number,
            require: false
        },
        elixirs: {
            type: Number,
            require: false
        },
        darkMagic: {
            type: Number,
            require: false
        }
});

const Stats = model('Stats', statsSchema);
module.exports = Stats;
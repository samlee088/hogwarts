const {Schema} = require('mongoose');

const spellsSchema = new Schema({

        id: {
            type: String,
            require: false
        },
        name: {
            type: String,
            require: false
        },
        type: {
            type: String,
            require: false
        },
        effect: {
            type: String,
            require: false
        },
        damage: {
            type: Number,
            require: false
        }
});

// const Spell = model('Spell', spellsSchema);
module.exports = spellsSchema;
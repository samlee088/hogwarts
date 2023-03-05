const {Schema, model} = require('mongoose');

const spellsSchema = new Schema({

        spellOne: {
            type: String,
            require: false
        },
        spellTwo: {
            type: String,
            require: false
        },
        spellThree: {
            type: String,
            require: false
        },
        spellFour: {
            type: String,
            require: false
        }
});

const Spell = model('Spell', spellsSchema);
module.exports = Spell;
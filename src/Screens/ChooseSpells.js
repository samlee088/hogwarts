import React from 'react';
import requests from '../Requests';
import SpellsMenu from './SpellsMenu';

const ChooseSpells = () => {

    return(
        <div>


        <div>
            <SpellsMenu fetchURL={requests.water_jet_spell}/>
            <SpellsMenu fetchURL={requests.albus_dumbledore_forceful_spell}/>
            <SpellsMenu fetchURL={requests.healing_spell}/>
            <SpellsMenu fetchURL={requests.arrow_shooting_spell}/>
            <SpellsMenu fetchURL={requests.exploding_charm}/>
        </div>
        </div>
    )
}

export default ChooseSpells;

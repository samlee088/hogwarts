import React from 'react'
import './SelectSpells.css';
import Spells from './Spells';
import requests from '../Requests';

const SelectSpells = () => {

    return(
        <div className='selectSpell'>
            <div className='selectSpell_image_container'>   
                <img className='selectSpell_backGround' src="https://images8.alphacoders.com/110/1102284.jpg" alt='harry potter homepage background'/>
            </div>
            <div className='selectSpell_option_container'>
              <Spells  fetchURL={requests.spells}/>
            </div>
        </div>
    )
}

export default SelectSpells;

import React from 'react'
import './SelectSpells.css';
import Spells from './Spells';
import requests from '../Requests';

const SelectSpells = () => {

    return(
        <div className='selectSpell'>
            <div className='selectSpell_image_container'>   
                <img className='selectSpell_backGround' src="https://media.npr.org/assets/img/2023/02/10/potions_final_wide-a44002be402930881b69756546deb424feee64fe-s1100-c50.jpg" alt='harry potter homepage background'/>
            </div>
            <div className='selectSpell_option_container'>
              <Spells  fetchURL={requests.spells}/>
            </div>
        </div>
    )
}

export default SelectSpells;

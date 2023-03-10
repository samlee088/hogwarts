import React from 'react';
import './RemoveSpellButton.css';
import {useMutation} from '@apollo/client';
import {REMOVE_SPELL} from '../utils/mutations';

const RemoveSpellButton = ({id, refetch}) => {

    const [removeSpell] = useMutation(REMOVE_SPELL);

    function removeSpellTrigger(e) {

        const spellId = e.target.getAttribute('spell_id')

        const {data} = removeSpell({
            variables: { id: spellId}
        })
        refetch();
    }


    return(
        <div>
            <button spell_id={id} onClick={removeSpellTrigger}> Remove Spell </button>
        </div>
    )
}

export default RemoveSpellButton;
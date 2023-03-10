import React,{useState,useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';
import {SAVE_SPELL} from '../utils/mutations';
import {useMutation} from '@apollo/client';

const SpellsMenu = ({fetchURL,refetch}) => {
    
    const [spells, setSpells]=useState([])
    const [saveSpell] = useMutation(SAVE_SPELL)
    
    useEffect(()=> {
        async function fetchSpellData() {
            const request = await axios.get(fetchURL);
            setSpells(request.data);
            return request
        }

        fetchSpellData();
    },[fetchURL])

    async function saveSpellTrigger(e) {

        const id = e.target.getAttribute('spell-id');
        const name = e.target.getAttribute('spell-name');
        const type = e.target.getAttribute('spell-type');
        const effect = e.target.getAttribute('spell-effect');

        console.log(id)
        console.log(name);
        console.log(type);
        console.log(effect);

            const {data} =  await saveSpell({
                variables: {
                    id: id,
                    name : name,
                    type: type,
                    effect: effect
                }
            })
        refetch();
    }
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> Spell Name: {spells.name} </Card.Title>
                    <Card.Text> Description: {spells.effect} </Card.Text>
                    <button value={spells.id} spell-id={spells.id} spell-name={spells.name} spell-type={spells.type} spell-effect={spells.effect} onClick={saveSpellTrigger}> Select </button>
                </Card.Body>
             </Card>
        </div>
    )
}

export default SpellsMenu;
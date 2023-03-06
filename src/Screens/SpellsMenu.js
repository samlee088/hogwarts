import React,{useState,useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';
import {SAVE_SPELL} from '../utils/mutations';
import {useMutation} from '@apollo/client';

const SpellsMenu = ({fetchURL}) => {
    
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

    function saveSpellTrigger() {

    }
    // console.log(spells);
    return(
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> Spell Name: {spells.name} </Card.Title>
                    <Card.Text> Description: {spells.effect} </Card.Text>
                    <button value={spells.id} onClick={saveSpellTrigger}> Select </button>
                </Card.Body>
             </Card>
        </div>
    )
}

export default SpellsMenu;
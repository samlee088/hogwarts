import React,{useState,useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';

const SpellsMenu = ({fetchURL}) => {
    
    const [spells, setSpells]=useState([])

    useEffect(()=> {
        async function fetchSpellData() {
            const request = await axios.get(fetchURL);
            setSpells(request.data);
            return request
        }

        fetchSpellData();
    },[fetchURL])

    console.log(spells);
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> Spell Name: {spells.name} </Card.Title>
                    <button value={spells.id}> Select </button>
                </Card.Body>
             </Card>
        </div>
    )
}

export default SpellsMenu;
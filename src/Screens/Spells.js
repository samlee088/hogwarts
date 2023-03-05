import React, {useState,useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';
import './Spells.css';

const Spells = ({fetchURL}) => {

    const [spells, setSpells] = useState([]);

    useEffect(()=> {
        async function fetchSpellsData() {
            const request = await axios.get(fetchURL);
            setSpells(request.data);
            console.log(request.data);
            return request;
        }
        fetchSpellsData();
    }, [fetchURL])

    return(

        <div className='spells'>

            <div className='spellsDisplay'>
                {spells.map((spell) => (
                    <Card style={{ width: '290px' }} key={spell.id} className='spell_display'>
                        <Card.Body>
                            <Card.Title>
                                {spell.name}
                            </Card.Title>
                            <Card.Text>
                                Spell Type: {spell.type}
                            </Card.Text>
                            <Card.Text>
                                Spell Effect: {spell.effect}
                            </Card.Text>
                            <Card.Text>
                                Id: {spell.id}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default Spells;
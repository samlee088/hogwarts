import React from 'react';
import requests from '../Requests';
import SpellsMenu from './SpellsMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import CurrentSpells from './CurrentSpells';
import {QUERY_ME} from '../utils/queries';
import {useMuataion, useQuery} from '@apollo/client';
import RemoveSpellButton from './RemoveSpellButton';

const ChooseSpells = () => {
    const { loading, data, refetch } = useQuery(QUERY_ME);

    if(loading) {
      return <h2>...Loading...</h2>
    }

    const spellsCount = data?.me?.spells?.length

    return(
        <div>

                    {/* <CurrentSpells/> */}
                    <div>
            {spellsCount ? (
                <>
                    {data?.me?.spells?.map((spell) => (
                        <div key={spell.id}>
                            <h1>Current Spell</h1>
                            <h2>{spell.name}</h2>
                            <h3>{spell.type}</h3>
                            <h3>{spell.effect}</h3>
                            <RemoveSpellButton id={spell.id} refetch={refetch} />

                        </div>
                    ))}
                </>
                ) : (
                    'No Saved Spells'
                )
            }
        </div>
            

            <div>
                <Container>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.water_jet_spell} refetch={refetch} spellCount={spellsCount}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.albus_dumbledore_forceful_spell} refetch={refetch}/></Col>
                    </Row>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.healing_spell} refetch={refetch} spellCount={spellsCount}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.arrow_shooting_spell} refetch={refetch}/></Col>
                    </Row>
                    <Row>   
                        <Col sm><SpellsMenu fetchURL={requests.exploding_charm} refetch={refetch} spellCount={spellsCount}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.bombarda_maxima} refetch={refetch} spellCount={spellsCount}/></Col>
                    </Row>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.bubble_head_charm} refetch={refetch} spellCount={spellsCount}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.blasting_curse} refetch={refetch} spellCount={spellsCount}/></Col>
                    </Row>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.episkey} refetch={refetch} spellCount={spellsCount}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.fireStorm} refetch={refetch} spellCount={spellsCount}/></Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}

export default ChooseSpells;

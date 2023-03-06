import React from 'react';
import requests from '../Requests';
import SpellsMenu from './SpellsMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrentSpells from './CurrentSpells';


const ChooseSpells = () => {

    return(
        <div>

                    <CurrentSpells/>
            
            
            <div>
                <Container>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.water_jet_spell}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.albus_dumbledore_forceful_spell}/></Col>
                    </Row>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.healing_spell}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.arrow_shooting_spell}/></Col>
                    </Row>
                    <Row>   
                        <Col sm><SpellsMenu fetchURL={requests.exploding_charm}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.bombarda_maxima}/></Col>
                    </Row>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.bubble_head_charm}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.blasting_curse}/></Col>
                    </Row>
                    <Row>
                        <Col sm><SpellsMenu fetchURL={requests.episkey}/></Col>
                        <Col sm><SpellsMenu fetchURL={requests.fireStorm}/></Col>
                        </Row>
                </Container>
            </div>
        </div>
    )
}

export default ChooseSpells;

import React , {useState, useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Houses.css';

const Houses = ({fetchURL}) => {

    const [houses, setHouses] = useState( [] )

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setHouses(request.data);

            console.log(request.data);

            return request;
        }
        fetchData();
    },[fetchURL])

    return(
        <div>
            <h1> Choose your House </h1>

            <div className='houses_houseCards'>
                {houses.map((house) => (
                    <Card style={{ width: '18rem' }} key={house.name}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{house.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            {house.traits.map((trait) => (
                                <ListGroup.Item key={trait.name}>{trait.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default Houses;
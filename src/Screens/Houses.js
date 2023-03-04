import React , {useState, useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Houses.css';
import {useMutation} from '@apollo/client';
import {ADD_HOUSE} from '../utils/mutations';
import {useNavigate} from 'react-router-dom';

const Houses = ({fetchURL}) => {

    const [houses, setHouses] = useState( [] )
    const[houseSelection, setHouseSelection] = useState({house: ''});
    const [addHouse] = useMutation(ADD_HOUSE);

    useEffect(()=> {    
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setHouses(request.data);

            console.log(request.data);

            return request;
        }
        fetchData();
    },[fetchURL])

    let navigate = useNavigate();
    let path ='/';

    const selectHouse = async (e) => {
        e.preventDefault();
        const {value} = e.target;
        setHouseSelection( {house: value})

        try{
            const {data} = await addHouse({
                variables: { house: value }
            })

            navigate(path);

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(houseSelection);
      
      }, [houseSelection]);

    return(
        <div>
            <h1> Choose your House </h1>

            <div className='houses_houseCards'>
                {houses.map((house) => (
                    <Card style={{ width: '18rem' }} key={house.name} className='houses_display'>
                    <Card.Body>
                        <Card.Title>{house.name}</Card.Title>
                        <Card.Text>
                            Here are attributes available for this house
                        </Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            {house.traits.map((trait) => (
                                <ListGroup.Item key={trait.name}>{trait.name}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    <Card.Body>
                                <button
                                    value={house.name}
                                    onClick={selectHouse}
                                >     
                                    Select House 
                                </button>
                    </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default Houses;
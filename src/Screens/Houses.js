import React , {useState, useEffect} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Houses.css';
import {useMutation} from '@apollo/client';
import {ADD_HOUSE} from '../utils/mutations';
import {ADD_STATS} from '../utils/mutations';
import {useNavigate} from 'react-router-dom';

const Houses = ({fetchURL}) => {

    const [houses, setHouses] = useState( [] )
    const[houseSelection, setHouseSelection] = useState({house: ''});
    const[stats, setStats] = useState({
        attack: '',
        defense: '',
        elixirs: '',
        darkMagic: ''
    })
    const [addHouse] = useMutation(ADD_HOUSE);
    const [addStatsData] = useMutation(ADD_STATS);

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

    // const selectHouse = async (e) => {
    //     e.preventDefault();
    //     const {value} = e.target;

    //     setHouseSelection( {house: value})
    //     console.log(value);

    //     async function houseSwitch(value) {
    //         switch (value) {
    //         case 'Gryffindor':
    //             console.log('match');
    //             setStats({
    //                 attack: parseFloat(1.5),
    //                 defense: parseFloat(1),
    //                 elixirs: parseFloat(1),
    //                 darkMagic: parseFloat(1)
    //             });
    //             break;
    //         case 'Ravenclaw':
    //             setStats({
    //                 attack: parseFloat(1),
    //                 defense: parseFloat(1.5),
    //                 elixirs: parseFloat(1),
    //                 darkMagic: parseFloat(1)
    //             });
    //             break;
    //         case 'Hufflepuff':
    //             setStats({
    //                 attack: parseFloat(1),
    //                 defense: parseFloat(1),
    //                 elixirs: parseFloat(1.5),
    //                 darkMagic: parseFloat(1)
    //             });
    //             break;
    //         case 'Slytherin':
    //             setStats({
    //                 attack: parseFloat(1),
    //                 defense: parseFloat(1),
    //                 elixirs: parseFloat(1),
    //                 darkMagic: parseFloat(1.5)
    //             });
    //             break;
    //         default:
    //             return
    //         }
    //     }
    //     console.log(stats);

    //     try{
            
    //         await houseSwitch(value);
    //         console.log(stats);
            
    //         const {data} = await addHouse({
    //             variables: { house: value }
    //         })

    //         const {statsData} = await addStatsData({
    //             variables: {...stats}
    //         })

    //         navigate(path);

    //     } catch(err) {
    //         console.log(err)
    //     }

    //     setStats({
    //         attack: '',
    //         defense: '',
    //         elixirs: '',
    //         darkMagic: ''
    //     })

    // }

    const selectHouse = async (e) => {
        e.preventDefault();
        const {value} = e.target;
      
        setHouseSelection({house: value});
      
        try {
          let stats = {};
      
          switch (value) {
            case 'Gryffindor':
              stats = {
                attack: parseFloat(1.5),
                defense: parseFloat(1),
                elixirs: parseFloat(1),
                darkMagic: parseFloat(1)
              };
              break;
            case 'Ravenclaw':
              stats = {
                attack: 1,
                defense: 1.5,
                elixirs: 1,
                darkMagic: 1
              };
              break;
            case 'Hufflepuff':
              stats = {
                attack: 1,
                defense: 1,
                elixirs: 1.5,
                darkMagic: 1
              };
              break;
            case 'Slytherin':
              stats = {
                attack: 1,
                defense: 1,
                elixirs: 1,
                darkMagic: 1.5
              };
              break;
            default:
              break;
          }
      
          await Promise.all([
            addHouse({variables: {house: value}}),
            addStatsData({variables: stats})
          ]);
      
        //   navigate(path);
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(() => {
        console.log(houseSelection);
      
      }, [houseSelection]);

      
    useEffect(() => {
        console.log(stats);
      
      }, [stats]);

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
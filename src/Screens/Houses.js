import React , {useState, useEffect} from 'react';
import axios from '../axios';

const Houses = ({fetchURL}) => {

    const [houses, setHouses] = useState( [] )

    useEffect(()=> {
        async function fetchData() {
            console.log(fetchURL);
            const request = await axios.get(fetchURL);
            setHouses(request.data.results);
            console.log(request);
            console.log(request.data);
            console.log(request.data.results);

            return request;
        }
        fetchData();
    },[fetchURL])

    return(
        <div>
            <h1> Choose your House </h1>

            

        </div>
    )
}

export default Houses;
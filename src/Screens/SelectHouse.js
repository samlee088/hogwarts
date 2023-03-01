import React from 'react';
import Houses from './Houses';
import requests from '../Requests';

const SelectHouse = () => {

    return(
        <div>
              <Houses fetchURL={requests.houses}/>
        </div>
    )
}

export default SelectHouse;
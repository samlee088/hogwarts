import React from 'react';
import Houses from './Houses';
import requests from '../Requests';
import './SelectHouse.css';

const SelectHouse = () => {

    return(
        <div>
            <div className='selectHouse_image_container'>   
                <img className='selectHouse_backGround' src="https://images8.alphacoders.com/110/1102284.jpg" alt='harry potter homepage background'/>
            </div>
            <div className='selectHouse_option_container'>
              <Houses fetchURL={requests.houses}/>
            </div>
        </div>
    )
}

export default SelectHouse;
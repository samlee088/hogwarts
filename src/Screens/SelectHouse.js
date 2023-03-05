import React from 'react';
import Houses from './Houses';
import requests from '../Requests';
import './SelectHouse.css';

const SelectHouse = () => {

    return(
        <div>
            <div className='selectHouse_image_container'>   
                <img className='selectHouse_backGround' src="https://cdn1.dotesports.com/wp-content/uploads/2023/01/01114909/hogwarts-houses-in-hogwarts-legacy-scaled.jpg" alt='harry potter homepage background'/>
            </div>
            <div className='selectHouse_option_container'>
              <Houses fetchURL={requests.houses}/>
            </div>
        </div>
    )
}

export default SelectHouse;
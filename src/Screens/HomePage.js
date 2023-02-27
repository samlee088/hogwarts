import React from 'react';
import './HomePage.css';
import Houses from './Houses';
import requests from '../Requests';

const HomePage = () => {


    return(
        <div className='homePage'>
            <h1> Harry Potter Game </h1>

            <Houses fetchURL={requests.houses}/>
        </div>
    )
}

export default HomePage;

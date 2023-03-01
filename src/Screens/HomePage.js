import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

const HomePage = () => {

    return(
        <div className='homePage'>
            <h1> Harry Potter Game </h1>
            <div className='homePage_backGround'>
                <img className='homePage_backGround' src="https://images8.alphacoders.com/110/1102284.jpg" alt='harry potter homepage background'/>
            </div>
            <div className='homePage_selectHouseRouterButton'>
                <Link to='/SelectHouse'>
            <button className='homePage_selectHouses'> Select House </button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;

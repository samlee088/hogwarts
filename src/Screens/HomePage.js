import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

const HomePage = () => {

    return(
        <div className='homePage'>
            <h1> Hogwarts BattleGround </h1>
            <div className='homePage_backGround'>
                <img className='homePage_backGround' src="https://i.pinimg.com/originals/ba/fc/48/bafc48a5c0ebd5bfc5282d07dd977047.jpg" alt='harry potter homepage background'/>
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

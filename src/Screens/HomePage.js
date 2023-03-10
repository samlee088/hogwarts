import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import Auth from '../utils/auth';

const HomePage = () => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    return(
        <div className='homePage'>
            <h1> Hogwarts BattleGround </h1>
            <div className='homePage_backGround'>
                <img className='homePage_backGround' src="https://i.pinimg.com/originals/ba/fc/48/bafc48a5c0ebd5bfc5282d07dd977047.jpg" alt='harry potter homepage background'/>
            </div>

            {token ? (<div className='homePage_selectHouseRouterButton'>
                <Link to='/SelectHouse'>
                    <button className='homePage_selectHouses'> Select House </button>
                </Link>
                <Link to='/selectSpells'>
                    <button className='homePage_selectHouses'>  Spells Full List  </button>
                </Link>
                <Link to='/ChooseSpells'>
                    <button className='homePage_selectHouses'> Choose Spells </button>
                </Link>
                <Link to='/battleOne'>
                    <button className='homePage_selectHouses'> Battle One </button>
                </Link>
            </div>) : (
                <div>
                    <h1> Please Sign Up or Login </h1>
                </div>
            )}
        
            
        </div>
    )
}

export default HomePage;

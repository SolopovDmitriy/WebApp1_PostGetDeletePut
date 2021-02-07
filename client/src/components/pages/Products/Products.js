import React from 'react';
import LogoImg from '../../../images/logo.png';
import CalendarImg from '../../../images/calendar.svg';
import {NavLink} from "react-router-dom";




export default class Products extends React.Component{
    render() {
        return (
            <main>
                <img src={LogoImg} alt="logo" className='navbar-brand_logo'/>
                <h2>Список продуктов: </h2>
                <ul>
                    <li>Сахар</li>
                    <li>Чай</li>
                    <li>Печеньки</li>
                </ul>

                <img src={CalendarImg} alt="logo" className='navbar-brand_logo'/>




s
            </main>
        )
    }
}
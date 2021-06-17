import React, {useState } from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';
import MenuItem from './MenuItem';

const Header = props => {

    const [active, setActive] = useState(false);

    const addClass = () => {
        active ? setActive(false) : setActive(true);
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__menu">
                    <NavLink className="logo" activeClassName={"logo-active"} exact to="/">News-Site</NavLink>
                    <nav className="menu">
                        <ul className="menu__wrapper">
                            {props.menuItem.map((item,index) => {
                                return(
                                    <MenuItem
                                        key={index}
                                        menuItem={item}
                                    />
                                )
                            })}
                        </ul>
                    </nav>  
                    <div className={active ? 'header__burger active' : 'header__burger'} onClick={() => addClass()}>
                        <span></span>
                    </div>
                    <nav className={active ? 'burger-menu active' : 'burger-menu'} onClick={() => setActive(false)}>
                        <ul className="burger-menu__wrapper">
                            <li className="burger-menu__item">
                                <NavLink className="burger-menu__link" exact to="/">Home</NavLink>
                            </li>
                            <li className="burger-menu__item">
                                <NavLink className="burger-menu__link" exact to="/News">News</NavLink>
                            </li>
                            <li className="burger-menu__item">
                                <NavLink className="burger-menu__link" exact to="/Contacts">Contacts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
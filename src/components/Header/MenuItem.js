import React from 'react';
import {NavLink} from 'react-router-dom';

const MenuItem = props => {
    return (
        <li className="menu__item">
            <NavLink className="menu__link" exact to={props.menuItem.path}>{props.menuItem.title}</NavLink>
        </li>
    )
}

export default MenuItem;
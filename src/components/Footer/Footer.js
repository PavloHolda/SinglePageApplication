import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.scss';

const Footer = props => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__menu">
                    <div className="footer__logo">
                        <NavLink className="logo" activeClassName={"logo-active"} exact to="/">News-Site</NavLink>
                        <p className="footer__disc">Single Page Application</p>
                    </div>
                    <p className="footer__text">Diploma project</p>
                    <div className="footer__by">
                        <span>Made by</span>
                        <p>{props.firstName} {props.lastName}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
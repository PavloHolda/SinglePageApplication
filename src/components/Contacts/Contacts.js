import React from 'react';
import './Contacts.scss';

const Contacts = props => {
    return(
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <div className="contacts__left">
                        <a className="contacts__tel" href="tel:+380965715688">+380 96 571 5688</a>
                        <p className="contacts__fullname">{props.lastName}<br/>{props.firstName}</p>
                        <a className="contacts__mail" href="mailto:pavloholda.dev@gmail.com">pavloholda.dev@gmail.com</a>
                        <p className="contacts__text">Front-end developer</p>
                        <p className="contacts__hardskills">HTML, CSS, ES5, ES6, React, Redux</p>
                    </div>
                    <div className="contacts__img"></div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
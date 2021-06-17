import React from 'react';
import './News.scss';
import NewsItem from '../NewsItem/NewsItem';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const News = props => {
    const news = useSelector((state) => state.news);
    return(
        <section className="news">
            <div className="container">
                <div className="news__wrapper">
                    {props.isHome 
                    ? <h1 className="news__title title">Always<br/> the latest <span>news</span></h1> 
                    : <h2 className="news__title title">Keep<br/> abreast of <span>events</span></h2>
                    }
                    <ul className="news__list">
                        {
                            news.articles.filter((item,index) => (item.content != null & index < props.countOfNews)).map((item,index) => {
                                return(
                                    <NewsItem
                                        key={index}
                                        fullNews={item}
                                    />
                                )
                            })
                        }
                    </ul>
                    {props.isHome ? <NavLink exact to="/News"><button className="news__btn">Keep abreast of events</button></NavLink> : null}
                </div>
            </div>
        </section>
    )
}

export default News;
import React from 'react';
import './NewsDetail.scss';
import Loader from '../Loader/Loader';
import NewsDate from '../NewsDate/NewsDate';
import { useSelector, useDispatch } from 'react-redux';


const NewsDetail = props => {
    const dispatch = useDispatch();
    dispatch({type: "SET_CURRENT_NEWS", currentNews: props.location.state});
    const currentNews = useSelector((state) => state.currentNews);
    
    if(!currentNews) {
        <Loader/>
    }
    return(
        <section className="detail">
            <div className="container">
                <div className="detail__wrapper">
                    <div className="detail__left">
                        <h2 className="detail__title title">{currentNews.title}</h2>
                        <div className="detail__block">
                            <a className="detail__link link" href={currentNews.url}>{currentNews.source.name}</a>
                            <NewsDate
                                date={currentNews.publishedAt}
                            />
                        </div>
                    </div>
                    <div className="detail__right">
                        <img className="detail__img" src={currentNews.urlToImage} alt={currentNews.title}></img>
                        <p>{currentNews.description}</p>
                        <p>{currentNews.content}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsDetail;
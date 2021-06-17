import React from 'react';
import {withRouter} from 'react-router-dom';
import NewsDate from '../NewsDate/NewsDate';
import { useDispatch } from 'react-redux';

const NewsItem = props => {
    const dispatch = useDispatch();
    return(
        <li className="news__item" 
        onClick={() => 
        {
            props.history.push('/News/' + props.fullNews.source.name, props.fullNews);
            dispatch({type:"SET_CURRENT_NEWS", currentNews: props.fullNews});
        }}
        >
            <h3 className="news__text">{props.fullNews.title}</h3>
            <div className="news__block">
                <a className="news__link link" href={props.fullNews.url}>{props.fullNews.source.name}</a>
                <NewsDate
                    date={props.fullNews.publishedAt}
                />
            </div>
        </li>
    )
}

export default withRouter(NewsItem);
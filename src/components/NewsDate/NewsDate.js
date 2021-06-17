import React from 'react';
import DateUtils from '../DateUtils';

const NewsDate = props => {
    let result = DateUtils(props.date);
    return(
            <div className="news__date">
                <span className="day">{result.day}</span>
                <span className="month">/ {result.month}</span>
            </div>
    )
}

export default NewsDate;
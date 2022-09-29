import React from "react";
import PropTypes from 'prop-types';
import { NewsItem } from "./NewsItem";
import someData from './news.json';

export function NewsList(props){

    const {news, setNews} = props;

    const addNews = () => {
        setNews ([
                someData[Math.floor(Math.random()*someData.length)],
                ...news,
            ]
        );
    };

   const onDelete = (newsID) => {
        setNews(
             news.filter((el) => el.id !==newsID),
        );
    };
console.log(`${'60a178bd76ea07e04a888284'}${Math.random()*10000000}`)
    return(
        <div className="news__list">
            <button onClick={() => addNews()}> add News</button>
            {news.map((item) => (
                <NewsItem key={`${item.id}${Math.random()*10000000}`}
                            item={item}
                            onDelete={onDelete}
                />
            ))}
        </div>
    )
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired,
    setNews: PropTypes.func.isRequired,
};
NewsList.defaultProps = {
    news: [],
};
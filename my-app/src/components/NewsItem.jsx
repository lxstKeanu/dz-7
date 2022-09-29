import React from "react";
import PropTypes from 'prop-types';

export function NewsItem(props){
    let { item, onDelete } = props;

    return(
        <div className="news__main">
            <h1 className="news__title">{item.title}</h1>
            <h2 className="news__content" dangerouslySetInnerHTML={{ __html: item.content }} />
            <div className="news__scpecial">{item.isSpecial ? "Special" : ""}</div>
            <div>{item.dateCreated.slice(0, 19)}</div>
            <div>{item.categories.map((cat) => (
                <div key={cat.id}> 
                    <div>{cat.id}</div>
                    <p>{cat.name}</p>
                </div>
            ))}
            </div>
            {item.link && <a className="news_link" href={item.link}>{item.link}</a>}
            {item.photo && <img alt="" src={item.photo + item.id} />}
            {item.author && <h4>{item.author}</h4>}
            <div><button className="dl__button" onClick={() => onDelete(item.id)}>Delete</button></div>
        </div>
    )
}

NewsItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        isSpecial: PropTypes.bool,
        dateCreated: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
        link: PropTypes.string,
        photo: PropTypes.string,
        author: PropTypes.string,
    }).isRequired,
};

NewsItem.defaultProps = {};
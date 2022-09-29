import React from "react";
import PropTypes from 'prop-types';

export function Filter(props) {

    const {isSpecial, link, photo, search, setIsSpecial, setLink, setPhoto, setSearch} = props;

    return (
        <div className="news__filters__list">
                <label>
                    <input
                        type="checkbox"
                        onChange={() => setIsSpecial(!isSpecial)}
                        checked={isSpecial}
                    /> <span>Filter only isSpecial</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => setLink(!link)}
                        checked={link}
                    /> <span>Filter has link</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => setPhoto(!photo)}
                        checked={photo}
                    /> <span>Filter has photo</span>
                </label>
                <div>
                    <label>
                        <input 
                            className="news__search"
                            type="text"
                            value={search} 
                            onChange={(e) => setSearch(e.currentTarget.value)} />
                    </label>
                </div>
            </div>
    )
}
Filter.propTypes = {
    isSpecial: PropTypes.bool.isRequired,
    link: PropTypes.bool.isRequired,
    photo: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    setIsSpecial: PropTypes.func.isRequired,
    setLink: PropTypes.func.isRequired,
    setPhoto: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
};
Filter.defaultProps = {};
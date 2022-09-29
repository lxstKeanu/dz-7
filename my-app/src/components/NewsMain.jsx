import React, {useState, useEffect} from "react";
import { Filter } from "./Filter";
import { NewsList } from "./NewsList";
import someData from "./news.json"

export function NewsMain(){
    let [isSpecial, setIsSpecial] = useState(false)
    let [link, setLink] = useState(false);
    let [photo, setPhoto] = useState(false);
    let [search, setSearch] = useState('');
    let [news, setNews] = useState(someData);
    

    useEffect(() => {
          setNews(someData.filter((el) => {
            if (isSpecial && !el.isSpecial) return false;
            if (link && !el.link) return false;
            if (photo && !el.photo) return false;
            return !(el.title.toLowerCase().indexOf(search.toLowerCase()) < 0)
                    || !(el.content.toLowerCase().indexOf(search.toLowerCase()) < 0)
                    || !(el.author.toLowerCase().indexOf(search.toLowerCase()) < 0)
        })) 
    }, [isSpecial, link, photo, search])
    return (
        <div className="main__main">
        <div className="news__main__filters">
            <Filter
                isSpecial={isSpecial}
                link={link}
                photo={photo}
                search={search}
                setIsSpecial={setIsSpecial}
                setLink={setLink}
                setPhoto={setPhoto}
                setSearch={setSearch}
            />
        </div>
        <div className="new__list">
            <NewsList news={news}
                      setNews={setNews}   
            />
        </div>
    </div>
    )
}
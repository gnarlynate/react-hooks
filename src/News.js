import React, { useEffect, useState} from 'react'

function News() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch('https://news-proxy-server.appspot.com/topstories')
    .then(response => response.json())
    .then(json => {
      setArticle(json)
    })
  }, [])


  return(
    <div className="Stories">
      <h3>News</h3>
      {
        articles.map(article => {
          const { id, by, time, title, url} = article

          return (
            <div key={id}> 
              <a href={url}>{title}</a>
              <div>{by} - {new Date(time).toLocaleDateString()}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default News;
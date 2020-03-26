import React from 'react'
import { useFetch } from './hooks'

function News() {
  const articles = useFetch('https://news-proxy-server.appspot.com/topstories', [])

  return(
    <div className="Stories">
      <h3>News</h3>
      {
        articles.map(article => {
          const { id, by, time, title, url} = article

          return (
            <div key={id}> 
              <a href={url}>{title}</a>
              <div>{by} - {new Date(time * 1000).toLocaleDateString()}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default News;
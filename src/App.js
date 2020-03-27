import React, { useState }from 'react';
import Gallery from './Gallery'
import Joke from './Joke'
import Matrix from './Matrix'
import News from './News'
import Tasks from './Tasks'
import Search from './Search'

function App() {
  const[showGallery, setShowGallery] = useState(true);

  const toggleShowGallery = () => {
    setShowGallery(!showGallery);
  }

  return (
    <div className="App">
      <h1>Hello Nathen</h1>
      <Search />
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr/>
      <div>
        {
          showGallery ? <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr/>
      <Matrix/>
      <hr/>
      <News />
      
    </div>
  );
}

export default App;

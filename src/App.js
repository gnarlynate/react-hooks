import React from 'react';
import Gallery from './Gallery'
import Joke from './Joke'
import Matrix from './Matrix'
import News from './News'
import Tasks from './Tasks'
import Search from './Search'
import ToggleButton from './ToggleButton'

function App() {
  return (
    <div className="App">
      <h1>Hello Nathen</h1>
      <Search />
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr/>
      <ToggleButton>
        <Gallery />
      </ToggleButton>
      <hr/>
      <ToggleButton>
        <Matrix />
      </ToggleButton>
      <hr/>
      <News />
      
    </div>
  );
}

export default App;

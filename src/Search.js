import React, { useState } from 'react'
function Search() {

const[userQuery, setUserQuery] = useState('');

const updateUserQuery = event => {
  setUserQuery(event.target.value)
}

const handleKeyPress = event => {
  if (event.key === 'Enter') {
    searchQuery();
  }
}

const searchQuery = () => {
  window.open(`https://google.com/search?q=${userQuery}`, '_blank');
}

  return (
    <div className="form">
      <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
      <button onClick={searchQuery}>Search</button>
    </div>
  )
}

export default Search;
import React from 'react'

const SearchBox = ({search, searchChange}) => {
  return (
    <div className='pa2'>
    <input 
    className='pa3 ba br4 bg-light-black'
    type='search'
     placeholder='looking for someone...?' value={search} onChange={searchChange} />
    </div>
    
  )
}

export default SearchBox
import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='pa3'>
            <input 
            className='pa3 ba b--green' 
            type="search" 
            placeholder='Search robots'
            onChange={searchChange}
            />
        </div>
        );
}
export default SearchBox;
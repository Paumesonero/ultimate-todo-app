import React from 'react'

export default function Search(props) {
    const { onSearch, } = props
    return (
        <div className='searchbar'>
            <input type="text" placeholder='Search Tasks' onChange={(e) => onSearch(e.target.value)} className='search-inpt' />
        </div>
    )
}

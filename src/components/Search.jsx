import React from 'react'

export default function Search(props) {
    const { onSearch, } = props
    return (
        <div>
            <input type="text" placeholder='Search Tasks' onChange={(e) => onSearch(e.target.value)} />
        </div>
    )
}

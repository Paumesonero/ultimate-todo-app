import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function TaskCard(props) {
    const { info: { name, image, useful_link, urgency, description, done }, onDelete } = props
    // console.log(name)
    const [showMore, setShowMore] = useState(false)
    const [checkBox, setCheckbox] = useState(false)

    // const isDone = (e) => {
    //     setCheckbox(prev => {
    //         console.log(done)
    //         return {
    //             ...prev,
    //             done: e.target.checked
    //         }

    //     })

    // }

    return (
        <div className='each-task'>
            <div className='checkbox-h2'>
                <label htmlFor="checkbox" className='aa'></label>
                <input type="checkbox" id='checkbox' />
                <h2>{name}</h2>
            </div>
            <div className=' urgency-link'>
                {urgency > 8 ? <p style={{ color: 'red' }} className='verical-line'>Very urgent!</p> : <p style={{ color: 'rgb(171,171,171)' }} className='verical-line'>Not very urgent</p>}
                <a href={useful_link}>Go</a>
                <button className='delete-btn' onClick={() => onDelete(name)}>🗑</button>
                {done ? <p className='done-tick'>✅</p> : null}

            </div>
            <div className='description-pop'>
                {showMore && <p>{description}</p>}
                <button onClick={() => setShowMore(prev => !prev)} className='plus-btn'>{!showMore ? <p className='plus-btn' >⬇️</p> : <p className='plus-btn'>➖</p>}</button>
            </div>
        </div>
    )
}

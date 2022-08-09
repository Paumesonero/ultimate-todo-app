import React from 'react'


export default function TaskCard(props) {
    const { info: { name, image, useful_link, urgency, description, done }, onDelete } = props
    // console.log(name)


    return (
        <div className='each-task'>
            <div className='checkbox-h2'>
                <label htmlFor="checkbox" className='aa'></label>
                <input type="checkbox" id='checkbox' name='checkbox' />
                <h2>{name}</h2>
            </div>
            <div className=' urgency-link'>
                {urgency > 8 ? <p style={{ color: 'red' }} className='verical-line'>Very urgent!</p> : <p style={{ color: 'rgb(171,171,171)' }} className='verical-line'>Not very urgent</p>}
                <a href={useful_link}>Go</a>
                <button className='delete-btn' onClick={() => onDelete(name)}>🗑</button>
                {done ? <p className='done-tick'>✅</p> : null}
            </div>
        </div>
    )
}

import React from 'react'

export default function TaskCard(props) {
    const { info: { name, image, useful_link, urgency, description, done } } = props
    //console.log(name)
    return (
        <div className='each-task'>
            <h2>{name}</h2>
            <img src={image} alt="" width='60%' />
            <p>{description}</p>
            <a href={useful_link}>Take me to it!</a>
            <p>How urgent: {urgency}/10</p>
            <div>
                {done ? '✅' : '❌'}
                <button>Delete 🗑</button>
            </div>
        </div>
    )
}

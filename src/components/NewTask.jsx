import React from 'react'
import { useState } from 'react'

export default function NewTask(props) {
    const { onAddingTask } = props
    const [name, setName] = useState('')
    const [urgency, setUrgency] = useState('')
    const [link, setLink] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        const task = {
            name: name,
            urgency: parseInt(urgency),
            link: link
        }
        onAddingTask(task)
        setName('')
        setUrgency('')
        setLink('')
    }
    return (
        <form action="" onSubmit={handleForm}>
            <div className='each-label-input'>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Name' name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='each-label-input'>
                <label htmlFor="name">Urgency (1 - 10)</label>
                <input type="number" max={10} min={1} name="urgency" value={urgency} placeholder='Urgency' onChange={(e) => { setUrgency(e.target.value) }} />
            </div>
            <div className='each-label-input'>
                <label htmlFor="name">Useful link</label>
                <input type="text" placeholder='Link' name='name' value={link} onChange={(e) => { setLink(e.target.value) }} />
            </div>
            <button className='create-btn'>Create</button>
        </form>
    )
}

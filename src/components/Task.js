import React from 'react'

export default ({message, id, date, deleteNote,}) => (

    <div className="Note">
        <fieldset style={{width:'min-width'}}>
        <legend>MY TASK</legend>
        <p style={{border: '1px solid #666', padding: '.5rem 1rem'}}>Id: {(id)} | Task: {message} | Date: {date} <div>
            <button onClick={() => deleteNote(id)}>Delete</button></div></p>
            </fieldset>
    </div>
)
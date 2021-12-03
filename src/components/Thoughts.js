import React, {useState, useEffect} from 'react'
import Note from './Thought.js'


export default () => {

    const handleSubmit = (e, notes, setNotes, input, setInput, date, setDate) => {
        e.preventDefault()
    const id = (notes.length) ? notes[notes.length - 1].id + 1 : 0
        setNotes ([...notes, {id: Date.now(), message: input, date: date}])
        setInput('Thoughts')
        setDate (null)
    }
    const deleteNote = (id, notes, setNotes) => {
        setNotes (notes.filter(note => note.id != id))
    
    }
   const [notes, setNotes] = useState([]);
   const [input, setInput] = useState('')
   const [date, setDate] = useState(null)

   useEffect  (() => {localStorage.setItem("notes", JSON.
   stringify(notes, null, 2))},[notes]);
   
    return (
        <div className="Notes" style={{float: 'right'}}>
            
            <form id="notes" onSubmit ={(e) => handleSubmit(e, notes, setNotes, input, setInput, date, setDate)}>
                <h1>Thoughts </h1>
                <label for="task" name="task">Thoughts:</label>
                <textarea rows="4" cols="50" onChange={(e) => setInput(e.target.value) } value={input} type="text" /> <br />
                <label for="date" name="date">Date:</label>
                <input onChange={(e) => setDate(e.target.value) } value={date} type="date" style={{width:"135px"}} /> <br />
                <button>Submit</button>
                </form>    
        {notes.map(note => (
            <Note message={note.message} id={note.id} date={note.date} deleteNote={(id) => deleteNote(id, notes, setNotes)}/>
        ))}
        </div>

    )
}
import React, {useState, useEffect} from 'react'
import Note from './Task.js'


export default () => {

    const handleSubmit = (e, notes, setNotes, input, setInput, date, setDate) => {
        e.preventDefault();

    const id = (notes.length) ? notes[notes.length - 1].id + 1 : 0
        setNotes ([...notes, {id: Date.now(), message: input, date: date}])
        setInput(null)
        setDate (null)
    }
    const deleteNote = (id, notes, setNotes,) => {
        setNotes (notes.filter(note => note.id != id))
    
    }
   const [notes, setNotes] = useState([...getNotesFromLocal()]);
   const [input, setInput] = useState('')
   const [date, setDate] = useState(null)

   function getNotesFromLocal() {
       if(!!localStorage.getItem('notes')) {
           return JSON.parse(localStorage.getItem('notes'))
       } else {
           return [];
       }
   }

   useEffect  (() => {localStorage.setItem("notes", JSON.
   stringify(notes))},[notes]);
   
    return (
        <div className="Notes" style={{float: 'left'}}>
            
            <form id="notes" onSubmit ={(e) => handleSubmit(e, notes, setNotes, input, setInput, date, setDate)}>
                
                <h1>Task To Do </h1>
                <label for="task" name="task">TASK:</label>
                <textarea rows="4" cols="50" onChange={(e) => setInput(e.target.value) } value={input} type="text" /> <br />
                <label for="date" name="date">Date:</label>
                <input onChange={(e) => setDate(e.target.value) } value={date} type="date" style={{width:"165px"}} /> <br />
                <button>Submit</button>
                </form>    
                    {notes.map(note => ( <Note message={note.message} id={note.id} date={note.date} deleteNote={(id) => deleteNote(id, notes, setNotes, date, setDate)}/>
            ))}
        </div>

    )
}
import React, {useState, useEffect} from 'react'
import Note from './Thought.js'


export default () => {

    const handleSubmit = (e, record, setRecord, input, setInput, date, setDate) => {
        e.preventDefault()
    const id = (record.length) ? record[record.length - 1].id + 1 : 0
        setRecord ([...record, {id: Date.now(), message: input, date: date}])
        setInput('')
        setDate ('')
    }
    const deleteNote = (id, record, setRecord) => {
        setRecord (record.filter(note => note.id != id))
    
    }
   const [record, setRecord] = useState([...getNotesFromLocal()]);
   const [input, setInput] = useState('')
   const [date, setDate] = useState('')
   
   function getNotesFromLocal() {
    if(!!localStorage.getItem('record')) {
        return JSON.parse(localStorage.getItem('record'))
    } else {
        return [];
    }
}
   useEffect  (() => {localStorage.setItem("record", JSON.
   stringify(record))},[record]);

   
    return (
        <div className="Notes" style={{float: 'right'}}>
            
            <form id="notes" onSubmit ={(e) => handleSubmit(e, record, setRecord, input, setInput, date, setDate)}>
                <h1>Thoughts </h1>
                <label htmlFor="task" name="task">Thoughts:</label>
                <textarea rows="4" cols="50" onChange={(e) => setInput(e.target.value) } value={input} type="text" /> <br />
                <label htmlFor="date" name="date">Date:</label>
                <input onChange={(e) => setDate(e.target.value) } value={date} type="date" style={{width:"135px"}} /> <br />
                <button>Submit</button>
                </form>    
        {record.map(note => (
            <Note message={note.message} id={note.id} date={note.date} deleteNote={(id) => deleteNote(id, notes, setNotes)}/>
        ))}
        </div>

    )
}
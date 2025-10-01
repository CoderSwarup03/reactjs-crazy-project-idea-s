import React, { useState } from 'react'
import { useEffect } from 'react';
import NoteFrom from './components/NoteFrom'
import NoteItem from './components/NoteItem';

const App = () => {
  //taking a empty array!!!

  const [notes, setNotes] = useState([]);   //taking a empty array!!
  useEffect(() => {
    const storeNote = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storeNote);
  }, [])

  // save in local stroage when note changes!!
  useEffect(() => {
    localStorage.setItem("notes" , JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([note, ...notes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const editText = (id,upadateText) => {
    setNotes(
      notes.map((note) => note.id === id  ? {...note, text: upadateText} : note)
    )
  }

  return (
    <>
      <h1 className='text-3xl font-semibold text-center'>Note App</h1>
      <NoteFrom addNote = {addNote}/>
      <NoteItem notes={notes} deleteNote={deleteNote} editText={editText}/>
    </>
  )
}

export default App
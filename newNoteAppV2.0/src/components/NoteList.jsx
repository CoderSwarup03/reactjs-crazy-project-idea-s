import React from 'react'
import NoteItem from './NoteItem'
const NoteList = ({ notes, deleteNote, editNote }) => {

  return (
    <>
      {notes.length === 0 ? (
        <p>No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => {
          return (
                <NoteItem 
                    note={note}
                    key={note.id}
                    deleteNote={deleteNote}
                    editNote={editNote}
                  />
           )
        })
      )}
    </>
  )
}

export default NoteList
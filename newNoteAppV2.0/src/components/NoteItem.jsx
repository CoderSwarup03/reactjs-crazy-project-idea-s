import React, { useState } from 'react'

const NoteItem = ({ notes, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateText, setUpdateText] = useState('notes.text');

  const handleSave = () => {
    editNote(notes.id, updateText);
    setIsEditing(false);
  }


  return (
    <>
      <div className='flex justify-center items-center mt-2'>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-bold text-center'>
            {
              isEditing ? (
                <input
                  type='text'
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                />
              ) : (
                <span>{notes.text}</span>
              )
            }
          </p>
          <div className='flex justify-between gap-2'>
            <div>
              {
                isEditing ? (
                  <button
                    onClick={handleSave}
                    className='bg-green-500 hover:bg-green-600 text-xl font-semibold px-2 py-1 rounded-md text-white'>Save todo</button>
                ) : (
                  <button 
                  onClick={() => setIsEditing(true)}
                  className='bg-green-500 hover:bg-green-600 text-xl font-semibold px-2 py-1 rounded-md text-white'>Edit todo</button>
                )
              }
            </div>
            <button 
              onClick={() => deleteNote(notes.id)}
            className='bg-red-500 hover:bg-red-600 text-xl font-semibold px-2 py-1 rounded-md text-white'>Delete Todo</button>
          </div>
        </div>
      </div >
    </>
  )
}

export default NoteItem
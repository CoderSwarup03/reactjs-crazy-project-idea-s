import React, { useState } from 'react'

const NoteFrom = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!noteText.trim()) return;
    addNote({ id: Date.now(), text: noteText });
    setNoteText('');
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex justify-center items-center gap-2 mt-[10px]'>
        <input
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          type="text"
          placeholder='write a todo...'
          className='w-[200px] px-2 py-1 outline-none border-2 border-[#222] hover:border-blue-500 rounded-md'
        />
        <button className='text-xl px-2 py-1 bg-blue-500 hover:bg-blue-600 text-semibold rounded-md text-white'>Submit</button>
      </form>
    </>
  )
}

export default NoteFrom
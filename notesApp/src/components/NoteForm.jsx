import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    addNote({ id: Date.now(), text: noteText });
    setNoteText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 w-full max-w-lg"
    >
      <input
        type="text"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Write a note..."
        className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default NoteForm;

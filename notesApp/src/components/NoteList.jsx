import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, deleteNote, editNote }) => {
  return (
    <div className="w-full max-w-lg space-y-3">
      {notes.length === 0 ? (
        <p className="text-gray-500 text-center">No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;

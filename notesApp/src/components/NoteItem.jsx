import React, { useState } from "react";

const NoteItem = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(note.text);

  const handleSave = () => {
    editNote(note.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      ) : (
        <span className="flex-1">{note.text}</span>
      )}

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteNote(note.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;

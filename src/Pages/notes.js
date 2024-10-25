import React, { useState } from 'react';
import { notification } from 'antd'; 
import '../Styles/Pages/notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const openNotification = (message) => {
    notification.open({
      message: message,
      duration: 2, 
    });
  };

  const addNote = () => {
    if (noteInput.trim()) {
      if (editingIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editingIndex] = noteInput;
        setNotes(updatedNotes);
        openNotification('Note updated successfully!'); 
        setEditingIndex(null);
      } else {
        setNotes([...notes, noteInput]);
        openNotification('Note added successfully!'); 
      }
      setNoteInput('');
    }
  };

  const editNote = (index) => {
    setNoteInput(notes[index]);
    setEditingIndex(index);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    openNotification('Note deleted successfully!'); 
  };

  return (
    <div className='notes'>
      <div className="notes-container">
        <div className="note-input-section">
          <textarea
            className="note-input"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="Write your note here..."
          />
          <button className="add-note-btn" onClick={addNote}>
            {editingIndex !== null ? 'Update Note' : 'Add Note'}
          </button>
        </div>
        <div className="note-list">
          {notes.map((note, index) => (
            <div key={index} className="note-card">
              <p className="note-text">{note}</p>
              <div className="note-actions">
                <button className="edit-btn" onClick={() => editNote(index)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleteNote(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

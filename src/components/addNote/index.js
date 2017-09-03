import React from 'react';

const AddNote = () => (
  <div className="note-Inputs">
    <h4>Add new note</h4>
    <div className="note-Input">
      <input className="note-title" placeholder="Note Title"/>
    </div>
    <div className="note-Input">
      <input className="note-text" placeholder="Note Message"/>
    </div>
  </div>
);

export default AddNote;
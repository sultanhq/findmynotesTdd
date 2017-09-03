import React from 'react';

const AddNote = () => (
  <div className="note-Inputs">
    <div className="note-Input">
      <input className="note-title" placeholder="Title"/>
    </div>
    <div className="note-Input">
      <input className="note-text" placeholder="Details"/>
    </div>
  </div>
);

export default AddNote;
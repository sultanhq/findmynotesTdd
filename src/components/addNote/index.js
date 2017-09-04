import React from 'react';

const AddNote = () => (
  <div>
    <form>
      <div className="note-Inputs">
        <h4>Add new note</h4>
        <div className="note-Input">
          <input className="note-title" placeholder="Note Title"/>
        </div>
        <div className="note-Input">
          <input className="note-text" placeholder="Note Message"/>
        </div>
      </div>
      <button type="submit" className="note-submit">
        Add Note
      </button>
    </form>
  </div>
);

export default AddNote;
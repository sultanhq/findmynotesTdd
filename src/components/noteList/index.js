import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({notes}) => {
  const noteItems = notes.map(note => (
    <li key={note.id}>
      <span className="note-title">{note.title}</span>
      <span className="note-text">{note.text}</span>
    </li>
  ));

  return (
    <ul>
      {noteItems} 
    </ul>
  )
};
  
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(
    {
     id: PropTypes.number.isRequired,
     title: PropTypes.string, 
     text: PropTypes.string 
    }
  )).isRequired
};

export default NoteList;
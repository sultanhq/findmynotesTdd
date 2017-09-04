import React from 'react';
import PropTypes from 'prop-types';

const NoteList = ({notes}) => {
  const noteItems = notes.map(note => (
    <li key={note.id}>
      <div className="note-title"><h4>{note.title}</h4></div>
      <div className="note-text">{note.text}</div>
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
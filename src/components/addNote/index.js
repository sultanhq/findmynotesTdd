import React from 'react';
import PropTypes from 'prop-types';

const AddNote = ({submitNote}) => {

  let inputTitle;
  let inputText;

  return (
    <div>
      <form
        onSubmit = {(event) => {
          event.preventDefault();
          submitNote(inputTitle.value, inputText.value);
          inputTitle.value = '';
          inputText.value = '';
        }}
        >
        <div className="note-Inputs">
          <h4>Add new note</h4>
          <div className="note-Input">
            <input className="input-note-title" placeholder="Note Title"
            ref={(element) => {
              inputTitle = element;}}
            />
          </div>
          <div className="note-Input">
            <input className="input-note-text" placeholder="Note Message"
            ref={(element) => {
              inputText = element;}}
            />
          </div>
        </div>
        <button type="submit" className="note-submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

AddNote.propTypes = {
  submitNote: PropTypes.func.isRequired,
};

export default AddNote;
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddNote from './components/addNote/';
import NoteList from './components/noteList/'
import actions from './actions/';

export const App = ({ submitNote, notes }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Find my Notes</h2>
    </div>
    <div className="Add-Note">
      <AddNote submitNote={submitNote} />
      <NoteList notes={notes} />
    </div>
  </div>
);

App.propTypes = {
  submitNote: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.shape(
      {
       id: PropTypes.number.isRequired,
       title: PropTypes.string, 
       text: PropTypes.string 
      }
    )).isRequired 
};

const mapStateToProps = state => state.noteApp;

const mapDispatchToProps = dispatch => ({
  submitNote: (title, text) => {
    if (title || text) {
      dispatch(actions.submitNote(title, text));
    }
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

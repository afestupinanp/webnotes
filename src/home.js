import React from "react";
import NoteCreator from "./notecreator";
import NoteList from './notelist';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {noteList: window.localStorage.getItem("note_list")};

        this.updateNotes = this.updateNotes.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.deleteEverything = this.deleteEverything.bind(this);
    }

    /**
     * This method allows us to update all the notes in our note storage.
     * @param {Array} notes Note array.
     */
    updateNotes(notes) {
        window.localStorage.setItem("note_list", JSON.stringify(notes));
        this.setState({noteList: JSON.stringify(notes)});
    }

    /**
     * This method deletes a particular note from our local storage.
     * @param {number} noteId Note ID.
     */
    deleteNote(noteId) {
        let notes = window.localStorage.getItem("note_list");
        notes = JSON.parse(notes);
        notes = notes.filter((note) => note.id !== noteId);
        this.updateNotes(notes);
    }

    /**
     * This method deletes every note in our local storage.
     */
    deleteEverything() {
        let notes = [];
        this.updateNotes(notes);
    }
    
    render() {
        return (
            <div>
                <NoteCreator updateNotes={this.updateNotes} />
                <NoteList deleteEverything={this.deleteEverything} deleteNote={this.deleteNote} noteList={this.state.noteList}></NoteList>
            </div>
        );
    }
}
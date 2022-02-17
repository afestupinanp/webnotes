import React from "react";
import Note from "./note";

export default class NoteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {noteList: this.props.noteList};
        this.deleteAll = this.deleteAll.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return nextProps;
    }

    /**
     * This method calls the delete everything method from our props.
     */
    deleteAll() {
        this.props.deleteEverything();
    }

    render() {
        let notes = JSON.parse(this.state.noteList);
        if (!notes || notes?.length === 0) {
            notes = "No notes available";
        } else {
            notes = notes.map((note) => <Note deleteNote={this.props.deleteNote} key={note.id} noteId={note.id} title={note.title} note={note.note} />);
        }
        return (
            <div className="row">
                <div className="col-6 text-start align-self-center">
                    <h4 className="my-5">All my notes</h4>
                </div>
                <div className="col-6 text-end align-self-center">
                    <button onClick={this.deleteAll} className="btn btn-outline-danger">
                        Delete all
                    </button>
                </div>
                <div className="col-12 text-center">
                    {notes}
                </div>
            </div>
        );
    }
}
import React from "react";
import { Link } from "react-router-dom";


export default class Note extends React.Component {

    constructor(props) {
        super(props);
        this.eraseNote = this.eraseNote.bind(this);
    }

    /**
     * This method allows us to delete a particular note.
     * @param {Event} e Event from our element.
     */
    eraseNote(e) {
        this.props.deleteNote(this.props.noteId);
    }

    render() {
        const snippet = (this.props.note.length > 200) ? this.props.note.substring(0, 200) + "..." : this.props.note;
        return (
            <div key={this.props.noteId} className="card my-3 shadow-lg">
                <div className="card-body text-start">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{snippet}</p>
                    <div className="row">
                        <div className="col-12">
                            <div className="btn-group">
                                <Link to={{pathname: `/note/${this.props.noteId}`}} className="btn btn-primary mx-1">Read note</Link>
                                <button type="button" onClick={this.eraseNote} className="btn btn-danger mx-1">Delete note</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
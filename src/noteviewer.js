import {React} from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

const NoteViewer = (props) => {
    const {noteId} = useParams();
    let noteData = null;

    const loadNote = () => {
        let notes = window.localStorage.getItem("note_list");
        notes = JSON.parse(notes);
        noteData = notes.find((note) => note.id == noteId);
    }

    loadNote();

    let createdAt = new Date(noteData.created_at);
    createdAt = `${createdAt.getDate()}/${createdAt.getMonth()}/${createdAt.getFullYear()} - ${createdAt.getHours()}:${createdAt.getMinutes()}`;

    return (
        <div>
            <div className="col-12">
                <h4>{noteData.title}</h4>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-lg-4 text-start align-self-center">
                        <i>Created at: {createdAt}</i>
                    </div>
                    <div className="col-12 col-lg-8 text-end">
                        <Link to="/" className="btn btn-outline-primary">Go back</Link>
                    </div>
                </div>
                
            </div>
            <div className="col-12 my-3">
                {noteData.note}
            </div>
        </div>
    );
}

export default NoteViewer;
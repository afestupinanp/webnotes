import React from "react";

export default class NoteCreator extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {title: "", note: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * This method allows to create the note in our note list.
     * @param {*} e 
     */
    handleSubmit(e) {
        e.preventDefault();
        let notes = window.localStorage.getItem("note_list");
        if (notes) {
            notes = JSON.parse(notes);
        } else {
            notes = [];
        }
        
        notes.push({
            "title": this.state.title,
            "note": this.state.note,
            "created_at": new Date().toISOString(),
            "id": (notes.length + 1)
        });
        this.props.updateNotes(notes);

        // clean form
        this.setState({"title": "", "note": ""});
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-12">Note creator</div>
                            <div className="col-12">
                                <div className="row">
                                    <label htmlFor="titleInput" className="col-form-label col-12">Title:</label>
                                    <div className="col-12">
                                        <input required id="titleInput" type="text" className="form-control" onChange={(e) => this.setState({title: e.target.value})} name="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="noteInput" className="col-form-label col-12">Note:</label>
                                    <div className="col-12">
                                        <textarea required id="noteInput" rows="10" className="form-control" onChange={(e) => this.setState({note: e.target.value})} name="" />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-12 text-center">
                                        <input className="btn btn-info" type="submit" value="Create note" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
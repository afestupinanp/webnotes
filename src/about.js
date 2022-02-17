import React from "react";

export default class About extends React.Component {
    render() {
        return (
            <div class="row">
                <div className="col-12 text-center">
                    <h3>WebNotes</h3>
                </div>
                <div className="col-12 text-justify">
                    <p>WebNotes is a little application created using React.js, just testing and playing around with it. You can manually delete all your notes deleting from the browser's local storage.</p>
                </div>
            </div>
        );
    }
}
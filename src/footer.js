import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer mt-5 mb-3 text-center">
                <p>Created by Andres Estupiñan, {new Date().getFullYear()}</p>
            </footer>
        );
    }
}
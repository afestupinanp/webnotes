// Import React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './home';

const About = React.lazy(() => import("./about"));
const NoteViewer = React.lazy(() => import("./noteviewer"));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="about" element={<About/>}></Route>
                    <Route path="/note/:noteId" element={<NoteViewer />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
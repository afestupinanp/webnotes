import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import LoadingComponent from './loading';
import Footer from "./footer";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container my-4">
                    <React.Suspense fallback={<LoadingComponent />}>
                        <Outlet />
                    </React.Suspense>
                </div>
                <Footer />
            </div>
        );
    }
}
import React, { Component } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Todo from "./Todo";
import Post from "./Post";

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "This is initial message"
        };
    }

    componentWillMount() {
        document.title = "Vinit Demo"
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="post" element={<Post />} />
            </Routes>
        );
    }
};

export default App;

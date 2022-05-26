import React, { Component } from "react";
import { Link } from "react-router-dom";

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            message: "This is initial message",
            todoList: []
        };
    }

    componentWillMount() {
        document.title = "Todo Page - Vinit Devani"
        const ogTitle = document.createElement('meta');
        const ogImage = document.createElement('meta');
        const ogDescription = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.content = "vinit devani title-Todo";
        ogImage.setAttribute('property', 'og:image');
        ogImage.content = "vinit devani image attribute-Todo";
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.content = "vinit devani.description-Todo";
        document.getElementsByTagName('head')[0].appendChild(ogImage);
        document.getElementsByTagName('head')[0].appendChild(ogTitle);
        document.getElementsByTagName('head')[0].appendChild(ogDescription);

        async function getData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const finalData = await res.json();
            console.log("Todo array request", finalData);
        };
        getData();
    }

    render() {
        console.log("todo-----------", this.state.todoList)
        return (
            <div>
                <h2>TodoPage</h2>
                <Link to="/post">Post</Link>
                <h3> {this.state.message} </h3>
            </div>
        );
    }
};

export default Todo;

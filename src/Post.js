import React, { Component } from "react";
import { Link } from "react-router-dom";

class Post extends Component{
constructor() {
	super();
	this.state = {
	message: "This is initial message",
    userList: []
	};
}

componentWillMount() {
    document.title="Post Page - Vinit Devani"
    const ogTitle = document.createElement('meta');
    const ogImage = document.createElement('meta');
    const ogDescription = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content= "vinit devani title-post";
    ogImage.setAttribute('property', 'og:image');
    ogImage.content= "vinit devani image attribute-post";
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content= "vinit devani.description-post";
    document.getElementsByTagName('head')[0].appendChild(ogImage);
    document.getElementsByTagName('head')[0].appendChild(ogTitle);
    document.getElementsByTagName('head')[0].appendChild(ogDescription);

	async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const finalData = await res.json();
        console.log("post array request", finalData);
    };
    getData();
}

render() {
    console.log("@@@@@@@@@@@2", this.state.userList)
	return (
	<div>
		<h2>PostPage</h2>
        <Link to="/">Home</Link>
		<h3> {this.state.message} </h3>
	</div>
	);
}
};

export default Post;

import React, { Component } from "react";

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Blog | Raymond Lin";
    }

    render() {
        return (
            <div class="main-body">
                <h1>Blog</h1>
                <div className="secondary-body">
                </div>
            </div>
        );
    }
}

export default Blog;
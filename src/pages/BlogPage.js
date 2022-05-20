import React, { Component } from "react";


class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.content = require('raw-loader!../blog-posts/'+this.props.filename).default;
    }

    componentDidMount(){
        document.title = this.props.title + " | Blog | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>{this.props.title}</h1>
                <div className="secondary-body">
                    <div dangerouslySetInnerHTML={{__html: this.content}}></div>
                </div>
            </div>
        );
    }
}

export default BlogPage;
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
                <h2>{this.props.date}</h2>
                <div className="secondary-body">
                    <div dangerouslySetInnerHTML={{__html: this.content}}></div>
                    <p><i>{'\r\n\r\n'+this.props.date+' by Raymond Lin'}</i></p>
                </div>
                <div className="secondary-body">
                    <h4><a href="/blog">Back to Blogs</a></h4>
                </div>
            </div>
        );
    }
}

export default BlogPage;
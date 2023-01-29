import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";


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
                    <h2>Comments</h2>
                    <div className = "comment-container">
                        <DiscussionEmbed
                            shortname="raymondlin"
                            config={{
                                url: 'https://raymond-lin.com'+this.props.url,
                                identifier: this.props.url,
                                title: this.props.title,
                            }}
                        />
                    </div>
                </div>
                <div className="secondary-body">
                    <h4><a href="/blog">Back to Blogs</a></h4>
                </div>
            </div>
        );
    }
}

export default BlogPage;
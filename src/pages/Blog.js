import React, { Component } from "react";
import GetBlogs from "./BlogPost";

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Blog | Raymond Lin";
    }

    render() {
        const blogs = GetBlogs();
        return (
            <div className="main-body">
                <h1>Blog</h1>
                {
                    blogs.map((blog, i) => {
                        const text = (
                            <div key={blog.getPagePath()+"_text"} className="u-half-column">
                                <h2>
                                    <a href={blog.getPagePath()}>{blog.getName()}</a>
                                </h2>
                                <h3>
                                    {blog.getDate()}
                                </h3>
                                <p dangerouslySetInnerHTML={{__html: blog.getPreviewText()+'\r\n\r\n' + "<a href=" + blog.getPagePath() + ">Read More...</a>"}} />
                            </div>
                        );
                        const image = (
                            <div key={blog.getPagePath()+"_image"} className="u-half-column">
                                <a href={blog.getPagePath()}>
                                    <img src={blog.getPreviewImage()}/>
                                </a>
                            </div>
                        )
                        const content = i % 2 === 0 ? [image, text] : [text, image];
                        return (
                            <div className="secondary-body" key={i}>
                                <div className="u-row" key={blog.getPagePath()}>
                                    {content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Blog;
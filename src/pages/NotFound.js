import React, { Component } from "react";

class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Page not Found | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>Page not Found</h1>
                <div className="secondary-body">
                    <div style={{ "textAlign": "center" }}>
                        <p><img src="/media/global/nopages.jpg"/></p>
                    </div>
                    <p>The requested page could not be found.{'\r\n\r\n'}
                        <a href="/">Return to home</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default NotFound;
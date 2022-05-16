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
            <div class="main-body">
                <h1>Page not Found</h1>
                <div className="secondary-body">
                    <div style={{ "text-align": "center" }}>
                        <img src="/images/global/nopages.jpg" width="50%" />
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
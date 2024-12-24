import React, { Component } from "react";

class FeatureRequests extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Feature Requests | The Street King | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>The Street King</h1>
                <h2>Feature Requests</h2>
                <div className="secondary-body">
                    <h3>Feature Requests are Closed</h3>
                    <p>Feature requests for <a href="/the-street-king">The Street King</a> are now closed. 
                    Thank you for being a dedicated player!
                    {'\r\n\r\n'}
                    If you have additional concerns requiring support, 
                    please use the <a href="mailto:feedback.thestreetking@gmail.com">contact email.</a></p>
                </div>
            </div>
        );
    }
}

export default FeatureRequests;

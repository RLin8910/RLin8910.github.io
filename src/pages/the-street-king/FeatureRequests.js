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
                    <h3>Would you like to request something that is...</h3>
                    <div className="u-row">
                        <div className="u-half-column">
                            <h4><a href="https://docs.google.com/forms/d/e/1FAIpQLSfoY-6H5gR1FPhAvmFZ3m32Rvc3cGgpaoT_lbvYphWRyGpEkQ/viewform?usp=sf_link">...a car?</a></h4>
                            <img src="/images/tsk/cars.png" width="100%"/>
                        </div>
                        <div className="u-half-column">
                            <h4><a href="https://communiroo.com/Raymond-Lin/the-street-king-feature-requests/suggestions">...not a car?</a></h4>
                            <img src="/images/tsk/notcar.png" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeatureRequests;

import React, { Component } from "react";

class CarVote extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Car Vote | The Street King | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>The Final Car Vote</h1>
                <iframe scrolling ="no" src="https://docs.google.com/forms/d/e/1FAIpQLSeL7LhEksecWGRWpfzf_epI3bAOILOvsbs8tFlCDDrid8W3-w/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        );
    }
}

export default CarVote;

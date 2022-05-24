import React, { Component } from "react";

class Changelog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Site Changelog | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>Site Changelog</h1>
                <div className="secondary-body">
                    <h2>May 24, 2022</h2>
                    <ul>
                        <li>Added <a href="/minigames">minigames</a> page with 5 new minigames!</li>
                        <li>Added <a href="/changelog">site changelog</a>.</li>
                        <li>Added more links to the <a href="/">home page</a>.</li>
                        <li>Changed some colors around</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>May 23, 2022</h2>
                    <ul>
                        <li>Added commenting to the <a href="/blog">blog</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>May 22, 2022</h2>
                    <ul>
                        <li>Site published! Woo-hoo!</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Changelog;
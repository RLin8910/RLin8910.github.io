import React, { Component } from "react";

const target = '../the-street-king/changelogs/';

class TheStreetKingChangelogs extends Component {
    constructor(props) {
        super(props);
        /* eslint import/no-webpack-loader-syntax: off */
        this.content = require('raw-loader!./changelogs/332.html').default;
    }

    componentDidMount() {
        document.title = "Changelogs | The Street King | Raymond Lin";
    }

    render() {
        
        return (
            <div className="main-body">
                <h1>Changelog</h1>
                <h2><a href="/the-street-king">The Street King</a></h2>
                {
                    PAGES.map(page => {
                        return (
                            <div className="secondary-body" key={page}>
                                <h3>{"Update "+(parseFloat(page.replace('.html','') / 100).toFixed(2))}</h3>
                                <div dangerouslySetInnerHTML={{__html: this.content}}></div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const PAGES = [
    '332.html'
];

export default TheStreetKingChangelogs;

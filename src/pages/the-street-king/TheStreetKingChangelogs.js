import React, { Component } from "react";

class TheStreetKingChangelogs extends Component {
    constructor(props) {
        super(props);
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
                        let title = "Update ";
                        if(page % 10 === 0) title += (page / 100).toFixed(1);
                        else title += (page / 100).toFixed(2);
                        const html = require('raw-loader!./changelogs/' + page + '.html').default;
                        return (
                            <div className="secondary-body" key={page}>
                                <h2>{title}</h2>
                                <div dangerouslySetInnerHTML={{__html: html}}></div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const PAGES = [
    332,
    331,
    330,
    320,
    310,
    302,
    301,
    300,
    293,
    292,
    291,
    290,
    280,
    271,
    270,
    263,
    262,
    261,
    260,
    250,
    242,
    241,
    240,
    234,
    233,
    232,
    231,
    230,
    221,
    220,
    211,
    210,
    204,
];

export default TheStreetKingChangelogs;

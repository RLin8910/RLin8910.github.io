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
                    <h2>December 24, 2024</h2>
                    <ul>
                        <li>Deprecate <a href="/the-street-king">The Street King</a> feature requests page.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>September 2, 2024</h2>
                    <ul>
                        <li>Update <a href="/about">About</a> page with more recent info and PC specs.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>July 7, 2024</h2>
                    <ul>
                        <li>Fixed broken links in <a href="/minigames">Minigames</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>January 22, 2024</h2>
                    <ul>
                        <li>Added images to the gallery on <a href="/the-street-king">The Street King's page</a>.</li>
                        <li>Switched around the locations of some navbar elements</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>October 1, 2023</h2>
                    <ul>
                        <li>Added section on <a href="/blog/i-spent-8-years-building-my-dream-game">The Story of The Street King</a> to <a href="/the-street-king">The Street King's page</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>March 12, 2023</h2>
                    <ul>
                        <li><a href="/left-turn-legend">Left Turn Legend</a> has been released! Pages have been updated accordingly.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>January 30, 2023</h2>
                    <ul>
                        <li>The <a href="/shop">Shop</a> is here! Get all-new merch for <a href="/the-street-king">The Street King</a> and <a href="left-turn-legend">Left Turn Legend</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>January 26, 2023</h2>
                    <ul>
                        <li>Added <a href="/the-street-king/changelogs">Update History</a> page showing the full changelog for <a href="/the-street-king">The Street King</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>January 1, 2023</h2>
                    <ul>
                        <li>Added support for links in <a href="/blog">Blog</a> previews.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>November 22, 2022</h2>
                    <ul>
                        <li>Added <a href="/minigames/the-boomer">The Boomer</a> <a href="/minigames">minigame</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>October 21, 2022</h2>
                    <ul>
                        <li>Added <a href="/minigames/neom">Neom</a> <a href="/minigames">minigame</a>.</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>June 8, 2022</h2>
                    <ul>
                        <li>Added "Devlog Series" section to the <a href="/left-turn-legend">Left Turn Legend</a> page.</li>
                        <li>
                            Updated preview video on the <a href="/left-turn-legend">Left Turn Legend</a> page
                            to <a href="https://youtu.be/iEyottzp2Dw">Devlog 8</a>.
                        </li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h2>May 27, 2022</h2>
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
                        <li><a href="/blog/welcome-to-my-new-website">Site published! Woo-hoo!</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Changelog;
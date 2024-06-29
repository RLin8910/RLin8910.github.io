import React, { Component } from "react";

class LeftTurnLegend extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "Left Turn Legend | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>Left Turn Legend</h1>
                <h3>Oval Circuit Racing, With a Twist!</h3>
                <h2><a href="https://play.google.com/store/apps/details?id=com.RaymondLin.LeftTurnLegend">Android Download</a>   |   <a href="https://apps.apple.com/us/app/left-turn-legend/id6444576371">iOS Download</a></h2>
                <div className="u-16-9">
                    <iframe src="https://youtube.com/embed/MTyzg3hjmrU?playlist=MTyzg3hjmrU&autoplay=1&mute=1&loop=1"></iframe>
                </div>
                <h2>Latest Update</h2>
                <div className="u-16-9">
                    <iframe src="https://youtube.com/embed/JI11f3B4mVQ?playlist=JI11f3B4mVQ&autoplay=0&mute=0&loop=0"></iframe>
                </div>
                <div className="secondary-body">
                    <h3>Overview</h3>
                    <p>Left Turn Legend is an endless 
                        runner that parodies American oval circuit racing, but with a twist! Download it on <a href="https://play.google.com/store/apps/details?id=com.RaymondLin.LeftTurnLegend">Android</a>
                        {' or '}<a href="https://apps.apple.com/us/app/left-turn-legend/id6444576371">iOS</a>
                        {', and check out the '}<a href="https://youtube.com/playlist?list=PLvWoPUN7LnBrejppLeI3qUk6RB-Wc5kHn">devlog series</a>
                        {' for behind-the-scenes content explaining how I made the game!'}{'\r\n\r\n'}
                        The game focuses on intense short-track races with lots of crazy crashes while 
                        satirizing American capitalism and consumer culture. The large array of sponsors 
                        each reflect upon a real-life industry or company in a light-hearted yet meaningful manner.
                        {'\r\n\r\n'}Left Turn Legend was released on March 12! Woohoo!</p>
                </div>
                <div className="secondary-body">
                    <h3>Gallery</h3>
                    <h5>Click to Enlarge Images</h5>
                    <div className="u-row">
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/title.png"><img src="/media/ltl/gallery/title-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/turn-left.png"><img src="/media/ltl/gallery/turn-left-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/legendary-cars.png"><img src="/media/ltl/gallery/legendary-cars-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/crazy-powerups.png"><img src="/media/ltl/gallery/crazy-powerups-low.png"/></a>
                        </div>
                    </div>
                    <div className="u-row">
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/wrong-way-racing.png"><img src="/media/ltl/gallery/wrong-way-racing-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/dirt-racing.png"><img src="/media/ltl/gallery/dirt-racing-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/big-sponsorships.png"><img src="/media/ltl/gallery/big-sponsorships-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/ltl/gallery/custom-liveries.png"><img src="/media/ltl/gallery/custom-liveries-low.png"/></a>
                        </div>
                    </div>
                </div>
                <div className="secondary-body">
                    <h3>Features</h3>
                    <ul>
                        <li>Low-poly, fast-paced oval circuit racing</li>
                        <li>85 legendary stock cars from over 80 years of history</li>
                        <li>Crazy sponsors with even crazier goals to complete</li>
                        <li>Dirt and asphalt racing</li>
                        <li>Wrong way racing - go backwards around the track!</li>
                        <li>Freeform decal customizations allowing for custom paintjobs</li>
                        <li>Custom number creator to make your own racing number</li>
                        <li>Dynamic daylight cycle</li>
                        <li>Multiple race series</li>
                        <li>8 wacky powerups</li>
                        <li>40+ achievements</li>
                        <li>Leaderboards and cloud saves</li>
                        <li>Available on Android and iOS</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h3>Devlog Series</h3>
                    <p>As part of Left Turn Legend's development, I've been cataloguing the entire process. My devlog series
                       explains my problem solving process and how I approach the challenges involved in creating the game.
                       It has also been a great point of growth for me - I've gotten a lot better at content creation and
                       narration.
                    </p>
                    <p>
                        I've also done a few 3D modeling streams, which have been a great opportunity to interact with fans
                        while getting some work done!
                    </p>
                    <div className="u-16-9">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLvWoPUN7LnBqf0tG76klh_5G9xOvinwsS"></iframe>
                    </div>
                </div>
                <div className="secondary-body">
                    <h3>Community</h3>
                    <h4><a href="https://youtube.com/c/RaymondLin">Youtube Channel</a>   |   <a href="https://discord.gg/RqXbKwk">Discord Server</a></h4>
                </div>
                <div className="secondary-body">
                    <h3>Support</h3>
                    <h4><a href="/left-turn-legend/privacy-policy">Privacy Policy</a>   |   <a href="/left-turn-legend/changelogs">Update History</a>   |   <a href="mailto:feedback.leftturnlegend@gmail.com">Contact</a></h4>
                </div>
            </div>
        );
    }
}

export default LeftTurnLegend;

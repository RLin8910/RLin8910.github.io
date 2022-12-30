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
                <h2>Oval Circuit Racing, With a Twist!</h2>
                <div className="u-16-9">
                    <iframe src="https://youtube.com/embed/cVkCJxEQ92c?playlist=cVkCJxEQ92c&autoplay=1&mute=1&loop=1"></iframe>
                </div>
                <div className="secondary-body">
                    <h3>Overview</h3>
                    <p>Left Turn Legend is a new game I'm working on for Android and iOS devices. It's an endless 
                        runner that parodies American oval circuit racing, but with a twist! {'Follow my '}
                        <a href="https://youtube.com/playlist?list=PLvWoPUN7LnBqf0tG76klh_5G9xOvinwsS">devlog series</a> 
                        {' to '}see how the game grows and changes over time.{'\r\n\r\n'}
                        The game focuses on intense short-track races with lots of crazy crashes while 
                        satirizing American capitalism and consumer culture. The large array of sponsors 
                        each reflect upon a real-life industry or company in a light-hearted yet meaningful manner.</p>
                </div>
                <div className="secondary-body">
                    <h3>Devlog Series</h3>
                    <p>As part of Left Turn Legend's development, I've been cataloguing entire process. My devlog series
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
            </div>
        );
    }
}

export default LeftTurnLegend;

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
            <div class="main-body">
                <h1>Left Turn Legend</h1>
                <h2>Oval Circuit Racing, With a Twist!</h2>
                <div class="u-16-9">
                    <iframe src="https://youtube.com/embed/mXNs7Hg8TQk?playlist=mXNs7Hg8TQk&autoplay=1&mute=1&loop=1"></iframe>
                </div>
                <div class="secondary-body">
                    <h3>Overview</h3>
                    <p>Left Turn Legend is a new game I'm working on for Android and iOS devices. It's an endless 
                        runner that parodies American oval circuit racing, but with a twist! {'Follow my '}
                        <a href="https://youtube.com/playlist?list=PLvWoPUN7LnBqf0tG76klh_5G9xOvinwsS">devlog series</a> 
                        {' to'} see how the game grows and changes over time.{'\r\n\r\n'}
                        The game focuses on intense short-track races with lots of crazy crashes while 
                        satirizing American captialism and consumer culture. The large array of sponsors 
                        each reflect upon a real-life industry or company in a light-hearted yet meaningful manner.</p>
                </div>
                <div class="secondary-body">
                    <h3>Gallery</h3>
                    <div class="u-row">

                    </div>
                    <div class="u-row">

                    </div>
                </div>
            </div>
        );
    }
}

export default LeftTurnLegend;

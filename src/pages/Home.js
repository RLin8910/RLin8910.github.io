import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>Game Developer,  Programmer,  Artist</h1>
                <h2><a href="https://play.google.com/store/apps/developer?id=RLin">Google Play Store</a>   |   <a href="https://apps.apple.com/us/developer/raymond-lin/id1615309663">iOS App Store</a></h2>
                <div className="u-21-9">
                    <iframe src="https://youtube.com/embed/ZJ0tSErO04Y?playlist=ZJ0tSErO04Y&autoplay=1&mute=1&loop=1"></iframe>
                </div>
                <h1>Games</h1>

                <div className="secondary-body">
                    <h2><a href="/the-street-king">The Street King</a></h2>
                    <h3>Open World Street Racing</h3>
                    <div className="u-row">
                        <div className="u-half-column">
                            <p>Race in the biggest open world racing game for mobile, with over 50 miles of road!
                                Customize your cars with millions of unique combinations, and then race online with
                                friends or face down crazy opponents in a thrilling singleplayer campaign!{'\r\n\r\n'}
                                {'Download it on '}
                                <a href="https://play.google.com/store/apps/details?id=com.RaymondLin.TheStreetKing">Android</a>
                                {' or '}<a href="https://apps.apple.com/us/app/the-street-king/id1615309661">iOS!</a>
                                {'\r\n\r\n'}
                                <a href="/the-street-king">Read More...</a>
                            </p>
                        </div>
                        <div className="u-half-column">
                            <img src="/images/tsk/tsk.png" />
                        </div>
                    </div>
                </div>

                <div className="secondary-body">
                    <h2><a href="left-turn-legend">Left Turn Legend</a></h2>
                    <h3>Oval Circuit Racing, With a Twist!</h3>
                    <div className="u-row">
                        <div className="u-half-column">
                            <img src="/images/ltl/ltl.png" />
                        </div>
                        <div className="u-half-column">
                            <p>The craziest stock car racing game you've ever seen! Collect classic
                                stock cars from the past or race around in marvelous modern machines.
                                Customize your cars, collect capitalist sponsors, and become a Left Turn Legend.
                                {'\r\n\r\n'}
                                {'Left Turn Legend is currently still in development, so check out the ongoing '}
                                <a href="https://youtube.com/playlist?list=PLvWoPUN7LnBqf0tG76klh_5G9xOvinwsS">devlog series!</a>
                                {'\r\n\r\n'}
                                <a href="/left-turn-legend">Read More...</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

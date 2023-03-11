import React, { Component } from "react";
import GetBlogs from "./BlogPost";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Raymond Lin";
    }

    render() {
        const latestBlog = GetBlogs()[0];
        return (
            <div className="main-body">
                <h1>Game Developer,  Programmer,  Artist</h1>
                <h2><a href="https://play.google.com/store/apps/developer?id=RLin">Google Play Store</a>   |   <a href="https://apps.apple.com/us/developer/raymond-lin/id1615309663">iOS App Store</a></h2>
                <div className="u-16-9">
                    <iframe src="https://youtube.com/embed/qg18MEdOp5U?playlist=qg18MEdOp5U&autoplay=1&mute=1&loop=1"></iframe>
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
                            <a href="/the-street-king"><img src="/media/tsk/tsk.png" /></a>
                        </div>
                    </div>
                </div>

                <div className="secondary-body">
                    <h2><a href="/left-turn-legend">Left Turn Legend</a></h2>
                    <h3>Oval Circuit Racing, With a Twist!</h3>
                    <div className="u-row">
                        <div className="u-half-column">
                            <a href="/left-turn-legend"><img src="/media/ltl/ltl.png" /></a>
                        </div>
                        <div className="u-half-column">
                            <p>The craziest stock car racing game you've ever seen! Collect classic
                                stock cars from the past or race around in marvelous modern machines.
                                Customize your cars, collect capitalist sponsors, and become a Left Turn Legend.
                                {'\r\n\r\n'}
                                Download it on <a href="https://play.google.com/store/apps/details?id=com.RaymondLin.LeftTurnLegend">Android</a>
                                {' or '}<a href="https://apps.apple.com/us/app/left-turn-legend/id6444576371">iOS</a>
                                {', and check out the '}<a href="https://youtube.com/playlist?list=PLvWoPUN7LnBrejppLeI3qUk6RB-Wc5kHn">devlog series</a>
                                {' for behind-the-scenes content explaining how I made the game!'}
                                {'\r\n\r\n'}
                                <a href="/left-turn-legend">Read More...</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="secondary-body">
                    <h2><a href="/minigames">Minigames</a></h2>
                    <h3>A Collection of My Smaller Projects!</h3>
                    <div className="u-row">
                        <div className="u-half-column">
                            <p>In addition to larger, fleshed-out games, I've also done a number of smaller projects for
                               various game jams and other events. Check them out!
                                {'\r\n\r\n'}
                                <a href="/minigames">Read More...</a>
                            </p>
                        </div>
                        <div className="u-half-column">
                            <a href="/minigames"><img src="/media/minigames/minigames.png" /></a>
                        </div>
                    </div>
                </div>
                <h1>Latest Blog Post</h1>
                <div className="secondary-body">
                    <div className="u-row" key={latestBlog.getPagePath()}>
                        <div key={latestBlog.getPagePath()+"_image"} className="u-half-column">
                            <a href={latestBlog.getPagePath()}>
                                <img src={latestBlog.getPreviewImage()}/>
                            </a>
                        </div>
                        <div key={latestBlog.getPagePath()+"_text"} className="u-half-column">
                            <h2>
                                <a href={latestBlog.getPagePath()}>{latestBlog.getName()}</a>
                            </h2>
                            <h3>
                                {latestBlog.getDate()}
                            </h3>
                            <p dangerouslySetInnerHTML={{__html: latestBlog.getPreviewText()+'\r\n\r\n'+
                                "<a href=" + latestBlog.getPagePath() + ">Read More...</a>\r\n\r\n" +
                                "<a href=/blog>View All Posts</a>"}}>
                            </p>
                        </div>
                    </div>
                </div>
                 <h1>Other</h1>
                <div className="secondary-body">
                    <h4><a href="/shop">Shop</a>   |   <a href="/about">About Me</a>   |   <a href="/changelog">Site Changelog</a>   |   <a href="mailto:feedback.thestreetking@gmail.com">Contact</a></h4>
                </div>
            </div>
        );
    }
}

export default Home;

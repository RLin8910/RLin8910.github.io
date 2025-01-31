import React, { Component } from "react";

class TheStreetKing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "The Street King | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>The Street King</h1>
                <h3>Open World Street Racing In the Palm of Your Hand!</h3>
                <h2><a href="https://play.google.com/store/apps/details?id=com.RaymondLin.TheStreetKing">Android Download</a>   |   <a href="https://apps.apple.com/us/app/the-street-king/id1615309661">iOS Download</a></h2>
                <div className="u-21-9">
                    <iframe src="https://youtube.com/embed/ZJ0tSErO04Y?playlist=ZJ0tSErO04Y&autoplay=1&mute=1&loop=1"></iframe>
                </div>
                <h2>Latest Update</h2>
                <div className="u-21-9">
                    <iframe src="https://youtube.com/embed/PE_ysdlOI2g?playlist=PE_ysdlOI2g&autoplay=0&mute=0&loop=0"></iframe>
                </div>
                <div className="secondary-body">
                    <h3>Overview</h3>
                    <p>Race in the biggest open world racing game for mobile, with over 50 miles of road! 
                       Customize your cars with millions of unique combinations, and then race online with 
                       friends or face down crazy opponents in a thrilling singleplayer campaign! {'\r\n\r\n'}
                       Enter the dangerous world of illegal street racing. Drive through cities, mountains, canyons, the countryside, 
                       and even the snowy summit! Race in night and day, rain and snow, thunder and lighting. Face off against tough racers while escaping from huge hoards of cops. Become the most wanted racer in the county, and take your place as The Street King!
                       {'\r\n\r\n'}
                       Download it on <a href="https://play.google.com/store/apps/details?id=com.RaymondLin.TheStreetKing">Android</a> or <a href="https://apps.apple.com/us/app/the-street-king/id1615309661">iOS!</a></p>
                </div>
                <div className="secondary-body">
                    <h3>Gallery</h3>
                    <h5>Click to Enlarge Images</h5>
                    <div className="u-row">
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/build-your-ride.png"><img src="/media/tsk/gallery/build-your-ride-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/cop-chases.png"><img src="/media/tsk/gallery/cop-chases-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/crews.png"><img src="/media/tsk/gallery/crews-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/stock-cars.png"><img src="/media/tsk/gallery/stock-cars-low.png"/></a>
                        </div>
                    </div>
                    <div className="u-row">
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/environments.png"><img src="/media/tsk/gallery/environments-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/race-online.png"><img src="/media/tsk/gallery/race-online-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/twin-turbo.png"><img src="/media/tsk/gallery/twin-turbo-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/weather.png"><img src="/media/tsk/gallery/weather-low.png"/></a>
                        </div>
                    </div>
                    <div className="u-row">
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/eighties-update.png"><img src="/media/tsk/gallery/eighties-update-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/devilish-deeds.png"><img src="/media/tsk/gallery/devilish-deeds-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/nitro-nights.png"><img src="/media/tsk/gallery/nitro-nights-low.png"/></a>
                        </div>
                        <div className="u-fourth-column">
                            <a href="/media/tsk/gallery/wire-car.png"><img src="/media/tsk/gallery/wire-car-low.png"/></a>
                        </div>
                    </div>
                </div>
                <div className="secondary-body">
                    <h3>Features</h3>
                    <ul>
                        <li>Online multiplayer freeroam, races, and police chases</li>
                        <li>Singleplayer story mode with hours of fun</li>
                        <li>Freeroam races, drag races, and cop chase challenges</li>
                        <li>Detailed car tuning with bodykits, engine swaps, and neons!</li>
                        <li>Custom decal editor</li>
                        <li>Dynamic daylight cycle and weather</li>
                        <li>Snow, rain, and thunderstorms</li>
                        <li>Epic drifts, burnouts, and crashes</li>
                        <li>Police helicopters, spike strips, roadblocks, and SWAT trucks</li>
                        <li>Support for Bluetooth controller</li>
                        <li>45+ cars to customize and tune into your dream ride</li>
                        <li>Frequent updates with more cars, races, and features!</li>
                    </ul>
                </div>
                <div className="secondary-body">
                    <h3>The Story of The Street King</h3>
                    <p>The Street King was my first major game, and development has now spanned over <b>8 years</b>. It's what got me interested in programming 
                    and gamedev in the first place, so it'll always have a special place in my heart. 
                    Check out my <a href="/blog/i-spent-8-years-building-my-dream-game">blog post</a> where I reflect on the story from the mindset of a gamedev.
                    
                    {'\r\n\r\n'}Alternatively, for a more casual audience, watch my video where I explain how The Street King came to be:</p>
                    <div className="u-16-9">
                        <iframe src="https://youtube.com/embed/3-dyYF10Hqg?playlist=3-dyYF10Hqg&autoplay=0&mute=0&loop=0"></iframe>
                    </div>
                </div>
                <div className="secondary-body">
                    <h3>Community</h3>
                    <h4><a href="https://youtube.com/c/RaymondLin">Youtube Channel</a>   |   <a href="https://discord.gg/RqXbKwk">Discord Server</a></h4>
                </div>
                <div className="secondary-body">
                    <h3>Support</h3>
                    <h4><a href="/the-street-king/privacy-policy">Privacy Policy</a>   |   <a href="/the-street-king/changelogs">Update History</a>   |   <a href="mailto:feedback.thestreetking@gmail.com">Contact</a></h4>
                </div>
            </div>
        );
    }
}

export default TheStreetKing;

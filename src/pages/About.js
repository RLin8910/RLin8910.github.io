import React, { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "About | Raymond Lin";
    }

    render() {
        return (
            <div className="main-body">
                <h1>About</h1>
                <div className="secondary-body">
                    <div className="u-row">
                        <div className="u-half-column">
                            <a href="/the-street-king"><img src="/media/tsk/tsk.png"></img></a>
                        </div>
                        <div className="u-half-column">
                            <a href="/left-turn-legend"><img src="/media/ltl/ltl.png"></img></a>
                        </div>
                    </div>
                    <p>
                        <img src="/media/about/me.jpg"></img>
                    </p>
                    <h3>About Me</h3>
                    <p>
                        My name is Raymond, and I'm a solo game developer. I've been super interested in games and
                        computers from a young age, so picking up game dev was a natural next step!
                        {'\r\n\r\n'}
                        I've now been making games for over 10 years. Although many of my first projects were
                        never published and have now been lost to time, I have two major published games:{' '}
                        <a href="/the-street-king">The Street King</a> and <a href="/left-turn-legend">Left Turn Legend</a>. 
                        Both of these games are expressions of my passion for cars as they explore the worlds of illegal street
                        racing and sanctioned oval circuit racing in the USA, respectively.
                        {'\r\n\r\n'}I also created several{' '}
                        <a href="/minigames">smaller games</a> which can be found and played in-browser right here on this site.
                        {'\r\n\r\n'}
                        I'm also a huge car enthusiast, and I daily and track-drive a{' '}
                        <a href="/blog/c7-corvette---1-year-review---track-and-daily-duty">2016 Corvette.</a>
                        {'\r\n\r\n'}
                        Besides games and cars, I also enjoy both listening to music and performing it as a violinist.
                        I am currently working full-time as a software developer but hope to one day start my own video game 
                        studio.
                        {'\r\n\r\n'}
                        For more of my thoughts and miscellaneous projects, check out the <a href="/blog">blog</a>, and be sure to 
                        look at the "Social" menu in the top bar for more links!
                    </p>
                    <h3>PC Specs</h3>
                    <div className="u-16-9">
                        <iframe src="https://youtube.com/embed/IBU_hdkXR4g?playlist=IBU_hdkXR4g&autoplay=0&mute=0&loop=0"></iframe>
                    </div>
                    <h4>Main Rig</h4>
                    <p>
                        <ul>
                            <li>Be Quiet Base 500DX RGB Case</li>
                            <li>Gigabyte B650 Aorus Elite AX Motherboard</li>
                            <li>AMD Ryzen 7800 X3D CPU</li>
                            <li>NVIDIA RTX 4080 Super GPU</li>
                            <li>32 GB G.Skill Trident Z5 RGB DDR5 RAM (2 x 16 GB)</li>
                            <li>Thermalright PS120SE ARGB CPU Cooler</li>
                            <li>2 TB SSD Storage</li>
                        </ul>
                    </p>
                    <h4>Sim Racing Gear</h4>
                    <p>
                        <ul>
                            <li>Thrustmaster T300RS GT Edition Wheel/Pedals</li>
                            <li>Thrustmaster T8HA Shifter</li>
                        </ul>
                    </p>
                    <h4>Peripherals</h4>
                    <p>
                        <ul>
                            <li>Monoprice Dark Matter 49 in. Curved Monitor - 32:9, 1800R, 5120x1440 120 Hz</li>
                            <li>Razer Black Widow Green Switch Keyboard</li>
                            <li>Logitech G602 Gaming Mouse</li>
                        </ul>
                    </p>
                    <h4>Additional Devices/Other</h4>
                    <p>
                        <ul>
                            <li>Mac Mini M2 - for iOS Development</li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;

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
                    <p>
                        <div className="u-row">
                            <div className="u-half-column">
                                <img src="/media/tsk/tsk.png"></img>
                            </div>
                            <div className="u-half-column">
                                <img src="/media/ltl/ltl.png"></img>
                            </div>
                        </div>
                        My name is Raymond, and I'm a solo game developer. I've been super interested in games and
                        computers from a young age, so picking up game dev was a natural next step!
                        {'\r\n\r\n'}
                        I've now been making games for almost 10 years. Although many of my first projects were
                        never published and have now been lost to time, I do have one major published game,{' '}
                        <a href="/the-street-king">The Street King</a>, as well as another project in
                        development called <a href="/left-turn-legend">Left Turn Legend</a>. I also created several{' '}
                        <a href="/minigames">smaller games</a> which can be found right here on this site. As you can probably
                        tell from these games, I love cars and racing, so they have been the primary focus of my
                        projects.
                        {'\r\n\r\n'}
                        Besides games and cars, I also enjoy both listening to music and performing it as a violinist.
                        I am currently in college studying computer science with the hopes of one day starting my own
                        games studio.
                        {'\r\n\r\n'}
                        For more of my thoughts on my projects, check out the <a href="/blog">blog</a>, and be sure to 
                        look at the "Social" menu in the top bar for more links!
                    </p>
                </div>
            </div>
        );
    }
}

export default About;

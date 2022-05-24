import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";


class MinigamePage extends Component {
    constructor(props) {
        super(props);
        this.content = require('raw-loader!../minigames/'+this.props.filename).default;
        this.playing = false;
    }

    componentDidMount(){
        document.title = this.props.title + " | Minigames | Raymond Lin";
    }

    handleClick = () =>{
        this.playing = true;
        console.log(this.playing);
        this.forceUpdate();
    }

    fullscreenApp = () =>{
        if(this.playing) document.getElementById("game-window").requestFullscreen();
    }

    render() {
        return (
            <div className="main-body">
                <h1>{this.props.title}</h1>
                <h2>{this.props.date}</h2>
                <div className="u-16-9">
                    {
                        this.playing ?
                        <div className="button-holder">
                            <iframe id="game-window"
                            src={this.props.gamePath} 
                            scrolling="no" allowtransparency="true" 
                            allowfullscreen="true" mozallowfullscreen="true" 
                            msallowfullscreen="true" frameborder="0" 
                            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" 
                            webkitallowfullscreen="true"/>
                            <div className="fullscreen-button">
                                <button onClick={this.fullscreenApp}>
                                    <img src="/media/global/fullscreen.svg"/>
                                </button>
                            </div>
                        </div>
                        :
                        <div className="secondary-body u-centered-items button-holder">
                            <button 
                                className="u-centered-items"
                                onClick={this.handleClick}
                            >
                                <img src="/media/global/play.svg"/>
                            </button>
                        </div>
                    }
                </div>
                <div className="secondary-body">
                    <h2>Details</h2>
                    <div dangerouslySetInnerHTML={{__html: this.content}}></div>
                </div>
                <div className="secondary-body">
                    <h2>Comments</h2>
                    <p>
                        <DiscussionEmbed
                            shortname="raymondlin"
                            config={{
                                url: 'https://raymond-lin.com'+this.props.url,
                                identifier: this.props.url,
                                title: this.props.title,
                            }}
                        />
                    </p>
                </div>
                <div className="secondary-body">
                    <h4><a href="/minigames">Back to Minigames</a></h4>
                </div>
            </div>
        );
    }
}

export default MinigamePage;
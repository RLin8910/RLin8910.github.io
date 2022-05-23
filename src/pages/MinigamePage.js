import React, { Component } from "react";
import { DiscussionEmbed } from "disqus-react";


class MinigamePage extends Component {
    constructor(props) {
        super(props);
        this.content = require('raw-loader!../minigames/'+this.props.filename).default;
    }

    componentDidMount(){
        document.title = this.props.title + " | Minigames | Raymond Lin";
    }

    render() {
        console.log(this.props.url);
        return (
            <div className="main-body">
                <h1>{this.props.title}</h1>
                <h2>{this.props.date}</h2>
                <div class="u-16-9">
                    <iframe src={this.props.gamePath} 
                    scrolling="no" allowtransparency="true" 
                    allowfullscreen="true" mozallowfullscreen="true" 
                    msallowfullscreen="true" frameborder="0" 
                    allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" 
                    webkitallowfullscreen="true" id="game_drop"/>
                </div>
                <p><a href="Fullscreen">Fullscreen</a></p>
                <div className="secondary-body">
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
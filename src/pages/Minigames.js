import React, { Component } from "react";
import GetMinigames from './MinigameEntry';


class Minigames extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Minigames | Raymond Lin";
    }

    render() {
        const minigames = GetMinigames();
        return (
            <div className="main-body">
                <h1>Minigames</h1>
                <h2>A Collection of My Smaller Projects!</h2>
                {
                    minigames.map((minigame, i) => {
                        const text = (
                            <div key={minigame.getPagePath()+"_text"} className="u-half-column">
                                <h2>
                                    <a href={minigame.getPagePath()}>{minigame.getName()}</a>
                                </h2>
                                <p>
                                    {minigame.getPreviewText()+'\r\n\r\n'}
                                    <a href={minigame.getPagePath()}>Play</a>
                                </p>
                            </div>
                        );
                        const image = (
                            <div key={minigame.getPagePath()+"_image"} className="u-half-column">
                                <a href={minigame.getPagePath()}>
                                    <img src={minigame.getPreviewImage()}/>
                                </a>
                            </div>
                        )
                        const content = i % 2 == 0 ? [image, text] : [text, image];
                        return (
                            <div className="secondary-body">
                                <div className="u-row" key={minigame.getPagePath()}>
                                    {content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Minigames;
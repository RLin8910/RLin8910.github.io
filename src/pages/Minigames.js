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
                <div className="secondary-body">
                    <h2>A Collection of My Smaller Projects!</h2>
                    <p>
                        Although I mostly focus on making bigger games, I've also done a few smaller projects for various game jams!
                        There isn't really a common thread tying these games together besides having a limited scope - they each
                        have their own thing going on and are completely self-contained.
                        {'\r\n\r\n'}
                        Each of these games was made with a heavily restricted timeline. Some of them, like{' '}
                        <a href="/minigames/click">Click</a>, were made in the span of a few hours, while others, like{' '}
                        <a href="/minigames/no-beaches">No Beaches</a>, took me several days.
                        {'\r\n\r\n'}
                        Every game here can be played in-browser and is fully supported on computers. Some also have mobile support.
                    </p>
                </div>
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
                        const content = i % 2 === 0 ? [image, text] : [text, image];
                        return (
                            <div className="secondary-body" key={i}>
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
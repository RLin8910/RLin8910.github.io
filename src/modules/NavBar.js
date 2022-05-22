import React, { Component } from "react";


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
 class NavBar extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <div className="navbar-fake"/>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <div className="dropdown">
                    <button className="dropdown-button">
                        <a href={void(0)} onClick={this.onClick}>Games</a>
                        <div className="plus-container">
                            <img src="/media/global/plus.svg"></img>
                        </div>
                    </button>
                    <div className="dropdown-content" style={{width: '210%'}}>
                        <a href="/the-street-king">The Street King</a>
                        <a href="/left-turn-legend">Left Turn Legend</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-button">
                        <a href={void(0)} onClick={this.onClick}>Social</a>
                        <div className="plus-container">
                            <img src="/media/global/plus.svg"></img>
                        </div>
                    </button>
                    <div className="dropdown-content" style = {{width: '240%'}}>
                        <a href="https://youtube.com/c/RaymondLin">Youtube Channel</a>
                        <a href="https://discord.gg/RqXbKwk">Discord Server</a>
                        <a href="https://www.patreon.com/TheStreetKing">Patreon Page</a>
                        <a href="mailto:feedback.thestreetking@gmail.com">Email</a>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default NavBar;
  
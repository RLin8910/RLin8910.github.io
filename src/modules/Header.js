import React, { Component } from "react";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
 class Header extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <img src="/images/global/banner.jpg" width={"100%"}/>
        </div>
      );
    }
  }
  
  export default Header;
  
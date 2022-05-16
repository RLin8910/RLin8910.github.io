import React, { Component } from "react";

 class Footer extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <div className="navbar-fake"/>
          <div className="footer">
              <h5>Copyright © 2022 by Raymond Lin.</h5>
          </div>
        </div>
      );
    }
  }
  
  export default Footer;
  
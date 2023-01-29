import React, { Component } from "react";

class Shop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Store | Raymond Lin";
    }

    render() {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://raymond-lin.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js";
        document.body.appendChild(script);
        
        return (
            <div>
                <div id="myShop">
                    <div className = "secondary-body">
                        <h2>Loading...</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
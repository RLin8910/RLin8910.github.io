import React, { Component } from "react";

class Shop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // override shop attempting to change title
        const TARGET_TITLE = "Shop | Raymond Lin";
        document.title = TARGET_TITLE;

        const title = document.getElementsByTagName("title")[0];

        const observer = new MutationObserver(function(mutations) {
            if(document.title !== TARGET_TITLE) document.title = TARGET_TITLE;
        });

        const config = { attributes: true, childList: true, characterData: true };

        observer.observe(title, config);
    }

    render() {
        let shopScript = document.createElement("script");
        shopScript.type = "text/javascript";
        shopScript.src = "https://raymond-lin.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js";
        document.body.appendChild(shopScript);

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
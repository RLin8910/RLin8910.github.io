import React, { Component } from "react";

class Store extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.title = "Store | Raymond Lin";
    }

    render() {
        return (
            <div>
                <div id="myShop">
                    <a href="https://raymond-lin.myspreadshop.com">raymond-lin</a>
                </div>

                <script dangerouslySetInnerHTML={{__html:
                    `var spread_shop_config = {
                        shopName: 'raymond-lin',
                        locale: 'us_US',
                        prefix: 'https://raymond-lin.myspreadshop.com',
                        baseId: 'myShop'
                    };`
                }}/>

                <script type="text/javascript"
                        src="https://raymond-lin.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js">
                </script>
            </div>
        );
    }
}

export default Store;
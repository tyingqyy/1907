import React, {Component} from 'react';

import "./header.scss"
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="city">
                        <i className={"iconfont icon-location icon-city" }/>
                        <span>北京</span>
                        <i className={"iconfont icon-jiantou-copy-copy" }/>
                    </div>
                    <div className="head-search">
                        <i className={"iconfont icon-sousuo" }/>
                        <span>找明星、演出、场馆</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
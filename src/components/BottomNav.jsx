import React, {Component} from 'react';
import {
    NavLink,
} from "react-router-dom"
import "./bottomNav.scss"
class BottomNav extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <NavLink className="icon-home" exact to={"/"} >
                        <i className="iconfont icon-shouye"/>
                        <span>首页</span>
                    </NavLink>
                    <NavLink className="icon-order icon-home" to={"/order"}>
                        <i className="iconfont icon-dingdan"/>
                        <span>订单</span>
                    </NavLink>
                </div>
            </React.Fragment>
        );
    }
}

export default BottomNav;
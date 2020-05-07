import React, {Component} from 'react';
import {connect} from "react-redux";

import "./tab.scss"


import {getTabList} from "../../store/tab/selectors";
// import {getTabList} from "../../store/tab";
import {getTabData} from "../../store/tab/thunk";

class Tab extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {getTabList} = this.props;
        getTabList();


    }
    render() {
        const tabList = this.props.tabList;
        return (
            <React.Fragment>
                <div className="tab">
                    <ul>
                        {
                            tabList.map(v => (
                                <li key={v.positionName}>
                                    <img src={v.mainImg} alt=""/>
                                    <span>{v.positionName}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateTopProps = (state) => ({
    tabList: getTabList(state),

})
const mapDispatchToProps = (dispatch) => ({
    getTabList:() => dispatch(getTabData())

})
export default connect(mapStateTopProps, mapDispatchToProps)(Tab);
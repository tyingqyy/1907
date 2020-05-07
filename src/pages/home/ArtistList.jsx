import React, {Component} from 'react';
import {connect} from "react-redux";

import "./artistList.scss"

import {getCelebrityData} from "../../store/celebrityBasicList/thunk";

class ArtistList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {getCelebrityList} = this.props;
        getCelebrityList();
    }

    render() {
        const celebrityList = this.props.celebrityList;
        return (
            <React.Fragment>
                <div className="artist-list">
                    <div className="title">
                        <h3>大咖新动态</h3>
                    </div>
                    <ul>
                        {
                            celebrityList.map(v=>(
                                <li key={v.celebrityId}>
                                    <img src={v.headUrl} alt=""/>
                                    <p>{v.celebrityName}</p>
                                    <span>{v.recommendTag}</span>
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
    celebrityList: state.celebrityList.result

})
const mapDispatchToProps = (dispatch) => ({
    getCelebrityList:() => dispatch(getCelebrityData())

})
export default connect(mapStateTopProps, mapDispatchToProps)(ArtistList);
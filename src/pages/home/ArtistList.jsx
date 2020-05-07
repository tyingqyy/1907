import React, {Component} from 'react';
import "./artistList.scss"
class ArtistList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="artist-list">
                    <div className="title">
                        <h3>大咖新动态</h3>
                    </div>
                    <ul>
                        <li>
                            <img src="https://p0.meituan.net/moviemachine/7aae576e0f96f3c95d9bd6af487e0807251825.png@100w_100h_1c_1e" alt=""/>
                            <p>吴青峰</p>
                            <span>演出即将开始</span>
                        </li>
                        <li>
                            <img src="https://p0.meituan.net/moviemachine/7aae576e0f96f3c95d9bd6af487e0807251825.png@100w_100h_1c_1e" alt=""/>
                            <p>吴青峰</p>
                            <span>演出即将开始</span>
                        </li>
                        <li>
                            <img src="https://p0.meituan.net/moviemachine/7aae576e0f96f3c95d9bd6af487e0807251825.png@100w_100h_1c_1e" alt=""/>
                            <p>吴青峰</p>
                            <span>演出即将开始</span>
                        </li>
                        <li>
                            <img src="https://p0.meituan.net/moviemachine/7aae576e0f96f3c95d9bd6af487e0807251825.png@100w_100h_1c_1e" alt=""/>
                            <p>吴青峰</p>
                            <span>演出即将开始</span>
                        </li>
                        <li>
                            <img src="https://p0.meituan.net/moviemachine/7aae576e0f96f3c95d9bd6af487e0807251825.png@100w_100h_1c_1e" alt=""/>
                            <p>吴青峰</p>
                            <span>演出即将开始</span>
                        </li>
                        <li>
                            <img src="https://p0.meituan.net/moviemachine/7aae576e0f96f3c95d9bd6af487e0807251825.png@100w_100h_1c_1e" alt=""/>
                            <p>吴青峰</p>
                            <span>演出即将开始</span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default ArtistList;
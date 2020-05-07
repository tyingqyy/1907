import React, {Component} from 'react';
import "./forYou.scss";
class ForYou extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="for-you">
                    <div className="title">
                        <h3>为你推荐</h3>
                    </div>
                    {/*瀑布流*/}
                    <div className="falls">
                        <ul>
                            <li>
                                <img src="https://p0.meituan.net/myvideodistribute/a1540d2da5eee9ec588e9c85da70fe9b508090.jpg@338w_450h_1c_1e" alt=""/>
                                <div className="falls-list-content">
                                    <h4>[北京]  2020 Lauv 北京演唱会</h4>
                                    <p>2020.6.21 20:00 周日</p>
                                    <span>¥ 390 <i>起</i></span>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="https://img.meituan.net/kylisean/88c82ecdcd097a16890f8da9f68dbcc378065.jpg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ForYou;
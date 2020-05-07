import React, {Component} from 'react';

import "../asset/iconfont/iconfont.css";
import "./home.scss";


import Header from "./home/Header";
import Tab from "./home/Tab";
import Swiper from "./home/Swiper";
import ArtistList from "./home/ArtistList";
import ForYou from "./home/ForYou";



class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="home">
                    {/*    头部*/}
                    <Header/>
                    <div className="main">
                        {/*tab*/}
                        <Tab/>
                        {/*轮播图*/}
                       <Swiper/>
                        {/*大咖新动态*/}
                       <ArtistList/>
                        {/*为你推荐*/}
                        <ForYou/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Home;
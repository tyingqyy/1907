import React, {Component} from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

class Swiper extends Component {
    constructor(props) {
        super(props);
    }
    state = {
            data: ['1', '2', '3'],
            imgHeight: 72,
        }
        componentDidMount() {

            // simulate img loading
            setTimeout(() => {
                this.setState({
                    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
                });
            }, 100);
        }

    render() {
        return (
            <div className="swiper">
                {/*<WingBlank>*/}
                {/*    <Carousel*/}
                {/*        autoplay={false}*/}
                {/*        infinite*/}
                {/*        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}*/}
                {/*        afterChange={index => console.log('slide to', index)}*/}
                {/*    >*/}
                {/*        {this.state.data.map(val => (*/}
                {/*            <a*/}
                {/*                key={val}*/}
                {/*                href="http://www.alipay.com"*/}
                {/*                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}*/}
                {/*            >*/}
                {/*                <img*/}
                {/*                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}*/}
                {/*                    alt=""*/}
                {/*                    style={{ width: '100%', verticalAlign: 'top' }}*/}
                {/*                    onLoad={() => {*/}
                {/*                        // fire window resize event to change height*/}
                {/*                        window.dispatchEvent(new Event('resize'));*/}
                {/*                        this.setState({ imgHeight: 'auto' });*/}
                {/*                    }}*/}
                {/*                />*/}
                {/*            </a>*/}
                {/*        ))}*/}
                {/*    </Carousel>*/}
                {/*</WingBlank>*/}
            </div>
        );
    }
}

export default Swiper;
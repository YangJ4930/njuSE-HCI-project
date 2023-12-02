import { Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};
const ExploreView = function ExploreView() {
    return (
        <>
            <div>
                <p>
                    <h1>精选和推荐</h1>
                    <Recommendation />
                </p>

                <p>
                    <Discounts />
                </p>
            </div>
        </>
    );
};

function Recommendation() {
    return (
        <React.Fragment>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </React.Fragment>
    );
}

function Discounts() {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>特惠游戏</h3>
                <Link
                    to={{
                        pathname: '/explore_gameRepositoryView',
                    }}
                >
                    <svg
                        className='icon_rightArrow'
                        viewBox='0 0 1024 1024'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                    >
                        <path
                            d='M733.44 550.464a54.4 54.4 0 0 0 0-76.928l-379.52-379.52A48 48 0 0 0 286.08 161.92L636.16 512l-350.08 350.08a48 48 0 1 0 67.84 67.84l379.52-379.456z'
                            fill='#2c2c2c'
                        ></path>
                    </svg>
                </Link>
            </div>
            <React.Fragment>
                <Carousel>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </React.Fragment>
        </div>
    );
}

export default ExploreView;

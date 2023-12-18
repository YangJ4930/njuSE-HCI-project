import React, { Component } from 'react';
import { Divider } from 'antd';

export const NewsListCard = () => {
    return (
        <div>
            <Divider />
            <article style={{}}>
                <div style={{ display: 'flex' }}>
                    <div style={{ position: 'relative', borderRadius: 4 }}>
                        <div style={{ position: 'relative', width: 200 }}>
                            <img
                                src={
                                    'https://cdn2.unrealengine.com/the-invincible-cosmic-terror-dying-star-6-1920x1080-05f67b29ddde.jpg?h=270&quality=medium&resize=1&w=480'
                                }
                                alt={'图片'}
                                style={{ width: 250 }}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}></div>
            </article>
        </div>
    );
};

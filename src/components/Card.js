import React from 'react';
import { Card as ACard } from 'antd';

const Card = props => (
    <ACard
        bodyStyle={{ padding: 12, display: 'flex', flex: 1 }}
        size={'small'}
        {...props}
    />
);

export default Card;
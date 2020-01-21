import React from 'react';
import { Avatar } from 'antd';

const GenericAvatar = props => (
    <Avatar
        {...props}
        icon={'user'}
    />
);

export default GenericAvatar;
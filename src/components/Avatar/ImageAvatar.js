import React from 'react';
import { Avatar } from 'antd';
import { useUser } from 'hooks';

const ImageAvatar = ({ userID, ...otherProps }) => {
    const { profileImageSrc: src } = useUser(userID)
    return (
        <Avatar
            {...otherProps}
            {...{ src }}
        />
    );
};

export default ImageAvatar;
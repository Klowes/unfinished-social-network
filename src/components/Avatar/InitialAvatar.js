import React, { useMemo } from 'react';
import { Avatar } from 'antd';
import { useUser } from 'hooks';
import { getInitials } from 'utilities';

const ImageAvatar = ({ userID, ...otherProps }) => {
    const { name } = useUser(userID);
    const initials = useMemo(
        () => getInitials([name]),
        [name]
    );
    return (
        <Avatar
            {...otherProps}
        >
            {initials}
        </Avatar>
    );
};

export default ImageAvatar;
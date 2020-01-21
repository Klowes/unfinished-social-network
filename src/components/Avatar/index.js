import React, { useMemo } from 'react';
import ImageAvatar from './ImageAvatar';
import InitialAvatar from './InitialAvatar';
import GenericAvatar from './GenericAvatar';
import { useUser } from 'hooks';

const Avatar = ({
    userID,
    ...otherProps
}) => {
    const {
        name,
        profileImageSrc,
    } = useUser(userID);
    const AvatarComponent = useMemo(
        () => profileImageSrc
            ? ImageAvatar
            : name
                ? InitialAvatar
                : GenericAvatar,
        [name, profileImageSrc]
    );
    return (
        <AvatarComponent
            {...otherProps}
            {...{ userID }}
        />
    );
};

export default Avatar;
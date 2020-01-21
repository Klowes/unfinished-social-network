import React from 'react';
import { useParams } from "react-router-dom";

const Profile = () => {
    const userID = useParams();
    console.log(userID);
    return (
        <div>{'Profile'}</div>
    );
};

export default Profile;
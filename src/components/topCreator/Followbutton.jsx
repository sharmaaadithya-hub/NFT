import React, { useState } from 'react';
import './TopCreator.css';
const FollowButton = () => {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollowClick = () => {
        setIsFollowed(!isFollowed);
    };

    return (
        <button id={isFollowed ? 'hover' : 'Normal'} onClick={handleFollowClick}>
            {isFollowed ? '+ Followed' : '+ Follow'}
        </button>
    );
};

export default FollowButton;

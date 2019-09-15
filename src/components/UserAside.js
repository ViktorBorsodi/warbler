import React from 'react';
import DefaultProfileImage from '../images/default-profile-image.jpg';

const UserAside = ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="card">
            <img src={profileImageUrl || DefaultProfileImage} alt={username} className='img-fluid img-thumbnail' width='200' height='200' />
        </div>
    </aside>
)

export default UserAside
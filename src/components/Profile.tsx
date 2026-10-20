import avatarImg from "../assets/images/avatar.png";

function Profile({name, email}) {
    return (
        <div className="sidebar-profile">
            <img
                src={avatarImg}
                alt="Administrator"
                className="sidebar-profile-img"
            />
            <div className="sidebar-profile-info">
                <div className="sidebar-profile-name">{name}</div>
                <div className="sidebar-profile-email">{email}</div>
            </div>
        </div>
    )
}

export default Profile;

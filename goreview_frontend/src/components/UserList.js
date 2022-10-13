const UserList = ({users}) => {
    
    const userComponents = users.map(user => <li><img src="https://xsgames.co/randomusers/avatar.php?g=pixel" height="20px"></img> {user.username} Number of reviews:{user.reviews.length}</li>)

    return(
        <div className="user-list">
            <h3>User List</h3>
            {userComponents}
        </div>
    )
}

export default UserList;
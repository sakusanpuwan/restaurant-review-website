const UserList = ({users}) => {
    
    const userComponents = users.map(user => <li><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="40px"></img>{user.username} Number of reviews:{user.reviews.length}</li>)

    return(
        <>
        <h3>User List</h3>
        {userComponents}
        </>
    )
}

export default UserList;
const UserList = ({users}) => {
    
    const userComponents = users.map(user => <li>{user.username} Number of reviews:{user.reviews.length}</li>)

    return(
        <>
    
        <h3>User List</h3>
        {userComponents}
        </>
    )
}

export default UserList;
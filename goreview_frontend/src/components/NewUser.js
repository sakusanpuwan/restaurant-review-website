import { useState } from "react";

const NewUser = ({postUser}) => {


    const [user,setUser] = useState(
        {
            username: "",
            fullname:"",
            email:""

        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;

        let copiedUser = {...user}
        copiedUser[propertyName] = event.target.value;
        setUser(copiedUser);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        postUser(user)
        
    }
    return(
        <>
        <h2>Welcome new user!</h2>
        <form onSubmit={handleFormSubmit}>
            <label for = "userName">Username: </label>
            <input type="text" placeholder="user name" name="username" onChange={handleChange} value={user.username}></input>

            <label for = "fullName">Full name: </label>
            <input type="text" placeholder="full name" name="fullname" onChange={handleChange} value={user.fullname} ></input>

            <label for = "email">Email address: </label>
            <input type="text" placeholder="email" name="email" onChange={handleChange} value={user.email}></input>
            <input type="submit"></input>
        </form>
        </>
    )
    
}

export default NewUser;
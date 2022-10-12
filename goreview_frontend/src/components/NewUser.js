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
        <div id="registration-container">
        <h2>Welcome new user!</h2>
        <form onSubmit={handleFormSubmit}>
            <label for = "userName">Username: </label>
            <input type="text" placeholder="user name" name="username" onChange={handleChange} value={user.username}></input>

            <label for = "fullName">Full name: </label>
            <input type="text" placeholder="full name" name="fullname" onChange={handleChange} value={user.fullname} ></input>

            <label for = "email">Email address: </label>
            <input type="text" placeholder="example@email.com" name="email" onChange={handleChange} value={user.email}></input>

            <label for="password">Password: </label>
            <input type="password" name="password"></input>
            <input type="submit"></input>
        </form>
        </div>
    )
    
}

export default NewUser;
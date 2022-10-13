import { useState } from "react";

const NewUser = ({postUser}) => {


    const [user,setUser] = useState(
        {
            username: "",
            fullname:"",
            email:""
        }
    )

    const [display,setDisplay] = useState("")

    const handleChange = (event) => {
        let propertyName = event.target.name;

        let copiedUser = {...user}
        copiedUser[propertyName] = event.target.value;
        setUser(copiedUser);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        postUser(user)
        setUser({
            username: "",
            fullname:"",
            email:""
        })
        setDisplay("User " + user.username + " has been created!" );
        
    }
    return(
        <div id="registration-container">
        <h2>Welcome new user!</h2>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor = "userName">Username: </label>
            <input type="text" placeholder="user name" name="username" onChange={handleChange} value={user.username}></input>

            <label htmlFor = "fullName">Full name: </label>
            <input type="text" placeholder="full name" name="fullname" onChange={handleChange} value={user.fullname} ></input>

            <label htmlFor = "email">Email address: </label>
            <input type="text" placeholder="example@email.com" name="email" onChange={handleChange} value={user.email}></input>

            <label htmlFor="password">Password: </label>
            <input type="password" name="password"></input>
            <input type="submit"></input>
        </form>
        <h3>{display}</h3>
        </div>
    )
    
}

export default NewUser;
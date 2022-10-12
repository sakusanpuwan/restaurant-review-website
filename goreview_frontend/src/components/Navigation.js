import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <nav id="navbar">
                <h1>GOReview</h1>
                <div id="nav-links-search-div">
                    <ul id="nav-links">

                        <Link className="register" to={`/new-user`}><li>Register</li></Link>
                        <li><a className="nav-link" href="#">My Account</a></li>
                    </ul>
                    <input type="text" name="search" placeholder="Search"></input>
                </div>
                <div id="mobile-nav">
                    <ul id="nav-links-mobile">
                    <Link className="register" to={`/new-user`}><li>Register</li></Link>
                        <li><a className="nav-link" href="#">My Account</a></li>
                    </ul>
                    <input type="text" name="search" placeholder="Search"></input>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;
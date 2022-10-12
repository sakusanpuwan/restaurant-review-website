import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <header>
            <nav id="navbar">
                <h1>GOReview</h1>
                <div id="nav-links-search-div">
                    <ul id="nav-links">
                        <li><Link to={`/new-user`} className="nav-link" href="/new-user">Register</Link></li>
                        <li><a className="nav-link" href="#projects">My Account</a></li>
                    </ul>
                    <input type="text" name="search" placeholder="Search"></input>
                </div>
                <div id="mobile-nav">
                    <ul id="nav-links-mobile">
                        <li><Link to={'/new-user'} className="nav-link" href="#about-section">Register</Link></li>
                        <li><a className="nav-link" href="#projects">My Account</a></li>
                    </ul>
                    <input type="text" name="search" placeholder="Search"></input>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;
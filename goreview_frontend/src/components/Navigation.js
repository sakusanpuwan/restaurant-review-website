const Navigation = () => {
    return (
        <header>
            <nav id="navbar">
                <h1>GOReview</h1>
                <div id="nav-links-search-div">
                    <ul id="nav-links">
                      
                    <li><a className="nav-link" href="#about-section">Register</a></li>
                    <li><a className="nav-link" href="#projects">My Account</a></li>
                    </ul>
                    <input type="text" name="search" placeholder="Search"></input>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;
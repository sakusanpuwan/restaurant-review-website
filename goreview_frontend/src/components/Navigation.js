const Navigation = () => {
    return (
        <header>
            <nav id="navbar">
                <h1>GOReview</h1>
                <div>
                    <ul id="nav-links">
                      
                    <li><a class="nav-link" href="#about-section">Register</a></li>
                    <li><a class="nav-link" href="#projects">My Account</a></li>
                    </ul>
                    <input type="text" name="search" placeholder="Search"></input>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;
const Navigation = () => {
    return (
        <header>
            <nav id="navbar">
                <h1>GOReview</h1>
                <ul id="nav-links">
                <li><a class="nav-link" href="#about-section">Register</a></li>
                <li><a class="nav-link" href="#projects">My account</a></li>
                </ul>
                <input type="text" name="search" placeholder="Search"></input>
            </nav>
        </header>
    )
}

export default Navigation;
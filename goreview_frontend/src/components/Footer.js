const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_left">
                    <h4>Connect with us on</h4>
                    <ul>
                        <li><a href="https://www.apple.com/uk/app-store/" >AppStore </a> <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png" height="20px"></img></li>
                        <li><a href="https://play.google.com/store/games">Google Play</a><img src="https://www.freepnglogos.com/uploads/google-play-png-logo/new-get-it-on-google-play-png-logo-20.png" width="200" alt="new get it on google play png logo"></img></li>
                        <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                        <li><a href="https://en-gb.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer_right">
                    <nav>
                        <a href="#">View all restaurants</a>
                        <a href="#">Add review</a>
                        <a href="#">Language</a>
                        <a href="https://github.com/joaopulsz/restaurant-review-website">About GOReview</a>
                    </nav>
                </div>
            </footer>
        </>

    )
}

export default Footer;
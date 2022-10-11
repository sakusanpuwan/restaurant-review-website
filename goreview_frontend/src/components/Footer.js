const Footer = () => {
    return (
        <>
            <footer>
                <div id="footer-div">
                    <div>
                    <h4>Connect with us on:</h4>
                    <ul className="footer_left">
                        <li><a href="https://www.apple.com/uk/app-store/" >AppStore </a> <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-antivirus-software-policy-library-and-information-34.png" height="20px"></img></li>
                        <li><a href="https://play.google.com/store/games">Google Play</a><img src="https://www.freepnglogos.com/uploads/google-play-png-logo/world-google-play-png-logo-4.png" alt="new get it on google play png logo"></img></li>
                        <li><a href="https://twitter.com/?lang=en">Twitter</a> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"></img></li>
                        <li><a href="https://en-gb.facebook.com/">Facebook</a><img src="https://www.freepnglogos.com/uploads/facebook-icons/facebook-icon-transparent-background-3.png"></img></li>
                        <li><a href="https://www.instagram.com/">Instagram</a><img src="https://www.freepnglogos.com/uploads/instagram-icon-png/new-instagram-logo-png-6.png"></img></li>
                    </ul>
                </div>
                <div>
                    <ul className="footer_right">
                        <li><a href="#">View all restaurants</a></li>
                        <li><a href="#">Add review</a></li>
                        <li><a href="#">Language</a></li>
                        <li><a href="https://github.com/joaopulsz/restaurant-review-website">About GOReview</a></li>
                    </ul>
                </div>
                </div>
                <div className="footer_middle">
                    <h4>© 2022 GoReview BNTA</h4>

                </div>
            </footer>
        </>

    )
}

export default Footer;
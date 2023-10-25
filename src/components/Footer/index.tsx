import React from 'react'
import logo from '../../static/images/arabic-casino.png'

const Footer = () => {
    return (
        <footer className="footer ">
            <div className="container">
                <div className="footer__inner u-d-flex">
                    <div className="footer__col-left">
                        <a href="#" className="footer__logo">
                            <img
                                decoding="async"
                                className="footer__logo-desktop"
                                src={logo.src}
                                alt="arabic-casino"
                            />
                        </a>
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis ultrices posuere felis, eu efficitur eros
                            dapibus a. Nunc rutrum fringilla metus, id aliquam
                            neque dignissim.
                        </p>
                    </div>
                    <div className="footer__col-right">
                        <div className="footer__col-nav">
                            <h3 className="h4"> Main </h3>
                            <ul>
                                <li>
                                    <a href="#">Real money casinos</a>
                                    <a href="#">New casinos</a>
                                    <a href="#">Fast Payout casinos</a>
                                    <a href="#">Mobile casinos</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__col-nav">
                            <h3 className="h4"> Payments </h3>
                            <ul>
                                <li>
                                    <a href="#">Interac casinos</a>
                                    <a href="#">Gigadat casinos</a>
                                    <a href="#">PaySafeCard casinos</a>
                                    <a href="#">iDebit casinos</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer__col-nav">
                            <h3 className="h4"> Reviews </h3>
                            <ul>
                                <li>
                                    <a href="#">Leon</a>
                                    <a href="#">Jackpot City</a>
                                    <a href="#">CatCasino</a>
                                    <a href="#">Tortuga</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__col-nav">
                            <h3 className="h4"> Responsible Gambling </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Optio, delectus nobis quisquam
                                mollitia cum libero quia amet doloribus
                                asperiores porro facilis earum eveniet
                                perferendis maiores atque? Officia eaque dolore
                                nobis!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__copyright js-off-cta">
                <span> Copyright Arabic Casino</span>
            </div>
        </footer>
    )
}

export default Footer

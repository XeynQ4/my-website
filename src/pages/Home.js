import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import BskyLogo from '../images/bsky-logo.js';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-intro card">
                <h1 className="card-main-title">Xeyn</h1>
                <div className="card-text-container">
                    <p className="card-text">
                        I'm a student in Slovakia who likes to code in free
                        time. This website is made in react by me. I know
                        JavaScript, Java, Python and basics of C and Rust.
                    </p>
                    <div className="card-text">
                        <a
                            className="no-underline"
                            href="https://en.pronouns.page/@Xeyn"
                        >
                            Any pronouns
                        </a>
                    </div>
                </div>
            </div>
            <div className="card contacts">
                <h2 className="card-title">Contacts</h2>
                <div className="card-text-container">
                    <div className="card-text no-margin-top">
                        <a
                            className="no-underline"
                            href="https://twitter.com/XeynQ4"
                        >
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>{' '}
                            <span className="underline">Twitter</span>
                        </a>
                    </div>
                    <div className="card-text no-margin-top">
                        <a
                            className="no-underline"
                            href="https://github.com/XeynQ4"
                        >
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{' '}
                            <span className="underline">Github</span>
                        </a>
                    </div>
                    <div className="card-text no-margin-top">
                        <a
                            className="no-underline"
                            href="https://bsky.app/profile/xeyn.me"
                        >
                            <BskyLogo />{' '}
                            <span className="underline">Bluesky</span>
                        </a>
                    </div>
                    <div className="card-text no-margin-top">
                        <a className="no-underline" href="mailto:xeyn@xeyn.me">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                            ></FontAwesomeIcon>{' '}
                            <span className="underline">Mail</span>
                        </a>
                    </div>
                    <div className="card-text no-margin-top">
                        <a
                            className="no-underline"
                            href="https://keys.openpgp.org/vks/v1/by-fingerprint/F6B84022F01263D53412640B0398A6CD0AAD551F"
                        >
                            <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>{' '}
                            <span className="underline">PGP key</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

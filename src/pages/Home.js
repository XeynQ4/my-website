import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import BskyLogo from '../images/bsky-logo.js';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-intro card">
                <h1 className="card-main-title">Xeyn</h1>
                <div className="card-text-container no-padding-top">
                    <p className="card-text">
                        I'm a student in Slovakia who likes to code in free
                        time. This website is made in react by me. I know
                        JavaScript, Java, Python and basics of C and Rust.
                    </p>
                </div>
            </div>
            <div className="card contacts">
                <h2 className="card-title">Contacts</h2>
                <div className="card-text-container">
                    <div className="card-text">
                        <a href="https://twitter.com/Xeyn_Q4">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>{' '}
                            Twitter
                        </a>
                    </div>
                    <div className="card-text">
                        <a href="https://github.com/XeynQ4">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>{' '}
                            Github
                        </a>
                    </div>
                    <div className="card-text">
                        <a href="https://bsky.app/profile/xeyn.me">
                            <BskyLogo /> Bluesky
                        </a>
                    </div>
                    <div className="card-text">
                        <a href="mailto:xeyn@xeyn.me">
                            <FontAwesomeIcon
                                icon={faEnvelope};
                            ></FontAwesomeIcon>{' '}
                            Mail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

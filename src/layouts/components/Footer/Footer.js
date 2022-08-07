import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Footer.module.scss';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('social')}>
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://www.pinterest.com/">
                    <FontAwesomeIcon icon={faPinterest} />
                </a>
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className={cx('designer')}>
                Powered by
                <a href="https://github.com/khongcodoitybg">Quang Nguyen</a>
            </div>
        </footer>
    );
}

export default Footer;

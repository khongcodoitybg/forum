import classNames from 'classnames/bind';
import { faLock, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Modal.module.scss';
import { useRef } from 'react';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function ModalSignIn({ isShowing, hide }) {
    const inputAccountRef = useRef();
    const inputPasswordRef = useRef();
    const inputPasswordRef = useRef();

    return isShowing ? (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')} />
            <div className={cx('modal-body')}>
                <header className={cx('header')}>
                    <label className={cx('label')}>Create your Account</label>
                    <div className={cx('close-icon-block')} onClick={hide}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </header>
                <div className={cx('body')}>
                    <div className={cx('form-group')}>
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            type="email"
                            ref={inputAccountRef}
                            className={cx('account-input')}
                            placeholder="Email address"
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type="text"
                            ref={inputPasswordRef}
                            className={cx('password-input')}
                            placeholder="Password"
                        />
                    </div>
                    <Button square className={cx('submit')}>
                        Sign up
                    </Button>
                </div>
                <footer className={cx('footer')}>
                    <p>You had an account:</p>
                    <Link to={config.routes.login} className={cx('link')}>
                        login
                    </Link>
                </footer>
            </div>
        </div>
    ) : null;
}

export default ModalSignIn;

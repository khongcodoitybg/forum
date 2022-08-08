import classNames from 'classnames/bind';
import { faLock, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Modal.module.scss';
import { useRef, useState } from 'react';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import config from '~/config';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function ModalSignIn({ isShowing, hide }) {
    const inputAccountRef = useRef();
    const inputPasswordRef = useRef();

    const [type, setType] = useState('password');
    const [showing, setShowing] = useState(false);

    function handleClickViewPass() {
        setShowing(!showing);
        setType('text');
    }

    function handleClickHidePass() {
        setShowing(!showing);
        setType('password');
    }

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
                            type={type}
                            ref={inputPasswordRef}
                            className={cx('password-input')}
                            placeholder="Password"
                        />
                        {!showing ? (
                            <button className={cx('eye-btn')} onClick={handleClickViewPass}>
                                <FontAwesomeIcon icon={faEyeSlash} />
                            </button>
                        ) : (
                            <button className={cx('eye-btn')} onClick={handleClickHidePass}>
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        )}
                    </div>
                    <Button square className={cx('submit')}>
                        Login
                    </Button>
                </div>
                <footer className={cx('footer')}>
                    <p>You don't have account:</p>
                    <Link to={config.routes.login} className={cx('link')}>
                        signup
                    </Link>
                </footer>
            </div>
        </div>
    ) : null;
}

export default ModalSignIn;

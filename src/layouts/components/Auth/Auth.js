import classNames from 'classnames/bind';
import styles from './Auth.scss';

const cx = classNames.bind(styles);

function Auth() {
    return <div className={cx('wrapper')}></div>;
}

export default Auth;

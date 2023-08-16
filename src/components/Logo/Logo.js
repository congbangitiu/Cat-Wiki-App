import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <Link className={cx('wrapper')} to={'/'}>
            <img
                src="https://dev-challenges-catwiki.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatwikilogo.92dea8ab.svg&w=128&q=75"
                alt="logo"
            />
        </Link>
    );
}

export default Logo;

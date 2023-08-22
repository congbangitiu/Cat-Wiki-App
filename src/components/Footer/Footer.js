import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import whiteLogo from '../../images/white_logo.png';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <p>CatWiki</p>
                    <img src={whiteLogo} alt="logo" />
                </div>
                <div className={cx('copyright')}>
                    <p className={cx('icon')}>©</p>
                    <p className={cx('text')}>
                        created by <p> Cong Bang </p> <p>- devChallenge.io 2023</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

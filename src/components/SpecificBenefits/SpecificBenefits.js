import classNames from 'classnames/bind';
import styles from './SpecificBenefits.module.scss';
import blackLogo from '../../images/black_logo.png';
import whiteLogo from '../../images/white_logo.png';

const cx = classNames.bind(styles);

function SpecificBenefits() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <img className={cx('img1')} src={whiteLogo} alt="cat" />
                <p>Why should you have a cat ?</p>
                <img className={cx('img2')} src={whiteLogo} alt="cat" />
            </div>
            <div className={cx('inner')}>
                <div className={cx('benefits')}>
                    <div className={cx('benefit')}>
                        <img src={blackLogo} alt="cat" />
                        <div className={cx('text')}>
                            <p>Provide emotional support and become a close friend in everyday life</p>
                        </div>
                    </div>
                    <div className={cx('benefit')}>
                        <img src={blackLogo} alt="cat" />
                        <div className={cx('text')}>
                            <p>Promote physical and mental activity</p>
                        </div>
                    </div>
                    <div className={cx('benefit')}>
                        <img src={blackLogo} alt="cat" />
                        <div className={cx('text')}>
                            <p>Create an active lifestyle that promotes physical and mental activity</p>
                        </div>
                    </div>
                    <div className={cx('benefit')}>
                        <img src={blackLogo} alt="cat" />
                        <div className={cx('text')}>
                            <p>Create a sense of presence and convey interest</p>
                        </div>
                    </div>
                    <div className={cx('benefit')}>
                        <img src={blackLogo} alt="cat" />
                        <div className={cx('text')}>
                            <p>Faster recovery from emotional trauma</p>
                        </div>
                    </div>
                    <div className={cx('benefit')}>
                        <img src={blackLogo} alt="cat" />
                        <div className={cx('text')}>
                            <p>Promote responsibility and create positive energy for life</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificBenefits;

import classNames from 'classnames/bind';
import styles from './CatBenefits.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function CatBenefits() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <p className={cx('bar')}></p>
                    <p className={cx('question')}>Why should you have a cat ?</p>
                    <p className={cx('answer')}>
                        Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                    </p>
                    <Link className={cx('more')} to={'/benefits'}>
                        <p>READ MORE</p>
                        <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                    </Link>
                </div>
                <div className={cx('photos')}>
                    <div className={cx('img1')}>
                        <img
                            src="https://charmcitybinhduong.com.vn/wp-content/uploads/2022/10/anh-meo-ngau-1.jpg"
                            alt="img 1"
                        />
                    </div>
                    <div className={cx('img2')}>
                        <img
                            src="https://demoda.vn/wp-content/uploads/2022/03/hinh-nen-meo-tai-cup-cute.jpg"
                            alt="img 2"
                        />
                    </div>
                    <div className={cx('img3')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStww3BOzBEE0XQa-4akYafkMGPIM1_XIu1nm7e76d68ajyU4GqL-z5P4K7AT9EmuwQaBA&usqp=CAU"
                            alt="img 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CatBenefits;

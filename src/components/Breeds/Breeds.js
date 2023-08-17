import classNames from 'classnames/bind';
import styles from './Breeds.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Breeds({ searchResults, catImages }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <p>Most Searched Breeds</p>
                <p className={cx('bar')}></p>
                <p>66+ Breeds For you to discover</p>
                <Link className={cx('more')} to={'/top'}>
                    <p>SEE MORE</p>
                    <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                </Link>
                {searchResults?.length > 0 && (
                    <div className={cx('photos')}>
                        {catImages.slice(0, 4).map((cat) => (
                            <div className={cx('photo')}>
                                <img src={cat?.url} alt="cat" />
                                <p className={cx('name')}>{cat?.breeds?.[0].name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Breeds;

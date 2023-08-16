import classNames from 'classnames/bind';
import styles from './TopBreeds.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TopBreeds({ topCatIDs, breeds }) {
    return (
        <div className={cx('wrapper')}>
            <p>Top 10 most searched breeds</p>
            {topCatIDs?.length > 0 && (
                <div className={cx('breeds')}>
                    {topCatIDs.map((imageID, index) => {
                        const breedData = breeds[index]?.breeds?.[0];

                        return (
                            <div className={cx('breed')} key={imageID}>
                                <div className={cx('imgContainer')}>
                                    <div className={cx('card')}>
                                        <div className={cx('imgContent')}>
                                            <img src={breeds[index]?.url} alt="cat" />
                                        </div>
                                        <div className={cx('textContent')}>
                                            <p className={cx('heading')}>{breedData?.name}</p>
                                            <p>
                                                <strong>Origin:</strong> {breedData?.origin}
                                            </p>
                                            <p>
                                                <strong>Weight:</strong> {breedData?.weight?.imperial} kg
                                            </p>
                                            <p>
                                                <strong>Lifespan:</strong> {breedData?.life_span} years
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('details')}>
                                    <p className={cx('name')}>
                                        {index + 1}. {breedData?.name}
                                    </p>
                                    <p className={cx('description')}>{breedData?.description}</p>
                                    <Link className={cx('moreDetails')} to={`/${breedData?.id}`}>
                                        <p>more details</p>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default TopBreeds;

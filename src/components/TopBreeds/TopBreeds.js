import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import styles from './TopBreeds.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function TopBreeds({ topCatIDs, breeds }) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollPercentage = (scrollPosition / (scrollHeight - clientHeight)) * 100;

        if (scrollPercentage >= 35) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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

            <div
                className={cx('backToTopButton')}
                onClick={() => handleBackToTop()}
                style={{ display: showBackToTop ? 'block' : 'none' }}
            >
                <div className={cx('tooltip')}>
                    <span className={cx('tooltiptext')}>Back to top</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 330 330"
                >
                    <path
                        id="XMLID_224_"
                        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                    />
                </svg>
            </div>
        </div>
    );
}

export default TopBreeds;

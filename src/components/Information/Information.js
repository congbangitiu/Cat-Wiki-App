import classNames from 'classnames/bind';
import styles from './Information.module.scss';

const cx = classNames.bind(styles);

function Information({ breed, catImage, otherPhotos }) {
    console.log(catImage);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('illustration')}>
                <div className={cx('mainPhoto')}>
                    <div className={cx('content')}>
                        <div className={cx('back')}>
                            <div className={cx('backContent')}>
                                <img
                                    src={
                                        catImage?.url ||
                                        'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-cat-default-avatar-image_2246581.jpg'
                                    }
                                    alt="cat"
                                />
                            </div>
                        </div>
                        <div className={cx('front')}>
                            <div className={cx('frontContent')}>
                                <p>
                                    Hi, I'm <strong>{breed?.name}</strong> <br /> Welcome to my home !!!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={cx('pad')}></div>
                </div>
                <div className={cx('specificInfo')}>
                    <p className={cx('name')}>{breed?.name}</p>
                    <p className={cx('description')}>{breed?.description}</p>
                    <div className={cx('statistics')}>
                        <p className={cx('text')}>
                            <strong>Temperament:</strong> {breed?.temperament}
                        </p>
                        <p className={cx('text')}>
                            <strong>Origin:</strong> {breed?.origin}
                        </p>
                        <p className={cx('text')}>
                            <strong>Weight:</strong> {breed?.weight?.imperial} kg
                        </p>
                        <p className={cx('text')}>
                            <strong>Life Span:</strong> {breed?.life_span} years
                        </p>
                        <div className={cx('indicator')}>
                            <strong>Adaptability:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.adaptability || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.adaptability || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Affection level:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.affection_level || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.affection_level || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Energy level:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.energy_level || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.energy_level || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Child Friendly:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.child_friendly || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.child_friendly || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Dog Friendly:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.dog_friendly || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.dog_friendly || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Stranger friendly:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.stranger_friendly || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.stranger_friendly || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Shedding level:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.shedding_level || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.shedding_level || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Grooming:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.grooming || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.grooming || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Intelligence:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.intelligence || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.intelligence || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Health issues:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.health_issues || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.health_issues || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                        <div className={cx('indicator')}>
                            <strong>Social needs:</strong>
                            <div className={cx('level')}>
                                {[...Array(Math.max(0, Math.min(5, breed?.social_needs || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'boldBar')} />
                                ))}
                                {[...Array(Math.max(0, 5 - (breed?.social_needs || 0)))].map((_, index) => (
                                    <div key={index} className={cx('bar', 'lightBar')} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('otherPhotos')}>
                <p>Other photos</p>
                {otherPhotos?.length > 0 && (
                    <div className={cx('photos')}>
                        {otherPhotos.map((photo) => (
                            <div className={cx('photo')} key={photo.id}>
                                <img src={photo.url} alt="cat" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Information;

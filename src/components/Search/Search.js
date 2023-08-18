import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import whiteLogo from '../../images/white_logo.png';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '../../hooks';

const cx = classNames.bind(styles);
function Search({ searchResults, setSearchResults, showResult, setShowResult, searchValue, setSearchValue }) {
    const [displayedResults, setDisplayedResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }

        const filteredResults = searchResults.filter((breed) =>
            breed.name.toLowerCase().startsWith(searchValue.toLowerCase()),
        );
        setDisplayedResults(filteredResults);
        setShowResult(!!searchValue);
        setIsSearching(true);

        if (searchValue.length <= 0) {
            setIsSearching(false);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        setDisplayedResults([]);
        setShowResult(false);
        setIsSearching(false);
        inputRef.current.focus();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setDisplayedResults(displayedResults.slice(0, 4));
                inputRef.current.placeholder = 'Search';
            } else {
                inputRef.current.placeholder = 'Enter your breed';
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [displayedResults]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <p>CatWiki</p>
                    <img src={whiteLogo} alt="logo" />
                </div>
                <p>Get to know more about your cat breed</p>
                <Tippy
                    visible={showResult && (displayedResults?.length > 0 || searchValue.length > 0)}
                    interactive={true}
                    appendTo={() => document.body}
                    placement="bottom"
                    render={(attrs) => (
                        <div className={cx('results')} tabIndex="-1" {...attrs}>
                            {displayedResults?.length > 0 && showResult ? (
                                displayedResults.map((breed) => (
                                    <Link to={`/${breed.id}`} key={breed.id} className={cx('result')}>
                                        <FontAwesomeIcon className={cx('magnifyingGlass')} icon={faMagnifyingGlass} />
                                        <p>{breed.name}</p>
                                    </Link>
                                ))
                            ) : (
                                <div className={cx('result', 'noResult')}>There is no results ...</div>
                            )}
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Enter your breed"
                            spellCheck={false}
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => handleChange(e)}
                            onFocus={() => setShowResult(true)}
                        />

                        {!isSearching && (
                            <icon className={cx('searchBtn')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_1_215)">
                                        <path
                                            d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09001 2.53002 2.53002 6.09001 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z"
                                            fill="#616475"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_215">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </icon>
                        )}

                        {isSearching && (
                            <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} onClick={handleClear} />
                        )}
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default Search;

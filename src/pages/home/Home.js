import Logo from '../../components/Logo';
import Search from '../../components/Search';
import '../../App.css';
import Breeds from '../../components/Breeds';
import CatBenefits from '../../components/CatBenefits';
import Footer from '../../components/Footer';

import { useState, useEffect } from 'react';

function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [catImageURLs, setCatImageURLs] = useState([]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResults(res);

                const imageIDs = res.map((breed) => breed.reference_image_id);

                imageIDs.forEach((imageID) => {
                    fetch(`https://api.thecatapi.com/v1/images/${imageID}`)
                        .then((res) => res.json())
                        .then((res) => {
                            setCatImageURLs((prevURLs) => [...prevURLs, res.url]);
                        })
                        .catch((error) => {
                            console.error('Error fetching cat image data:', error);
                        });
                });
            })
            .catch((error) => {
                console.error('Error fetching cats data:', error);
            });
    }, [searchValue]);

    return (
        <div className="Inner">
            <Logo />
            <Search
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                showResult={showResult}
                setShowResult={setShowResult}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Breeds searchResults={searchResults} catImageURLs={catImageURLs} />
            <CatBenefits />
            <Footer />
        </div>
    );
}

export default Home;

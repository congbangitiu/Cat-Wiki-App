import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import TopBreeds from '../../components/TopBreeds';
import { useState, useEffect } from 'react';

function TopCats() {
    const [topCatIDs, setTopcatIDs] = useState([]);
    const [breeds, setBreeds] = useState([]);

    const shuffleArray = (array) => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds`)
            .then((res) => res.json())
            .then((res) => {
                const imageIDs = res.map((breed) => breed.reference_image_id);
                const shuffledImageIDs = shuffleArray(imageIDs.slice(0, 10));
                setTopcatIDs(shuffledImageIDs);

                shuffledImageIDs.forEach((imageID) => {
                    fetch(`https://api.thecatapi.com/v1/images/${imageID}`)
                        .then((res) => res.json())
                        .then((res) => {
                            setBreeds((prev) => [...prev, res]);
                        })
                        .catch((error) => {
                            console.error('Error fetching cat image data:', error);
                        });
                });
            })
            .catch((error) => {
                console.error('Error fetching cats data:', error);
            });
    }, []);

    return (
        <div className="Inner">
            <Logo />
            <TopBreeds topCatIDs={topCatIDs} breeds={breeds} />
            <Footer />
        </div>
    );
}

export default TopCats;

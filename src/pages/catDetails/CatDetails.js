import Information from '../../components/Information';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function CatDetails() {
    const { id } = useParams();
    const [breed, setBreed] = useState();
    const [catImage, setCatImage] = useState();
    const [otherPhotos, setOtherPhotos] = useState();

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setBreed(res);
            })
            .catch((error) => {
                console.error('Error fetching breeds data:', error);
            });
    }, [id]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/${breed?.reference_image_id}`)
            .then((res) => res.json())
            .then((res) => {
                setCatImage(res);
            })
            .catch((error) => {
                console.error('Error fetching cat image data:', error);
            });
    }, [breed]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=10`)
            .then((res) => res.json())
            .then((res) => {
                setOtherPhotos(res);
            })
            .catch((error) => {
                console.error('Error fetching other photos data:', error);
            });
    }, [id]);

    return (
        <div className="Inner">
            <Logo />
            <Information breed={breed} catImage={catImage} otherPhotos={otherPhotos}/>
            <Footer />
        </div>
    );
}

export default CatDetails;

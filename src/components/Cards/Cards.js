import "./Cards.css";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function Cards() {
    const [dogFacts, setDogFacts] = useState([]);

    const fetchData = async () => {
        // Fetch the dog facts.
        const dogFactsURL = "https://dogfacts-api.herokuapp.com/api/v1/resources/dogs";
        const responseFromDogFacts = await fetch(dogFactsURL)
                                           .then(response => response.json())
                                           .catch(err => console.log(err));

        // Fetch the dog pictures.
        // This can be slow so, constraining the # of images downloaded.
        const numberOfImages = 30;
        const dogCEOImagesURL = `https://dog.ceo/api/breeds/image/random/${numberOfImages}`;
        const responseFromDogCEOImages = await fetch(dogCEOImagesURL)
                                               .then(response => response.json())
                                               .catch(err => console.log(err));
        const dogImages = responseFromDogCEOImages.message;

        const _ = responseFromDogFacts.map((dogFact, index) => {
            dogFact["img"] = dogImages[index % numberOfImages]; 
        });

        setDogFacts(responseFromDogFacts);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="cards">
            {dogFacts.map((dogFact, index) => (
                <Card key={index} className="card" border="dark">
                    <Card.Body>
                        <Card.Header className="card__title"> Dog Fact #{index + 1}</Card.Header>
                        <Card.Text className="card__text"> {dogFact.fact} </Card.Text>
                        <Card.Img className="card__img" src={dogFact.img} alt="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg" />
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Cards

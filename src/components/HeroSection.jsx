import CustomImg from "./CustomImg";
import {useEffect, useState} from "react";

export default function HeroSection() {
    const [image, setImages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/recipes")
            .then(result => result.json())
            .then(
                (result) => {
                    setImages(result);
                    console.log(result);
                },
                (error) => {
                    if (error.response) {
                        console.log(error.response.user);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                }
            )
    }, [])
    return (
        <div className="section hero">
            <div className="col">
                <h1 className="title">
                    What Are We About
                </h1>
                <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda blanditiis delectus, earum
                    ex expedita facilis, fugiat ipsa omnis perspiciatis tenetur veniam voluptatem voluptates. Animi
                    architecto debitis, eius ipsum perspiciatis velit voluptates.
                </p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                {   image.map((src, index) => {
                    console.log(src.images.url)
                    return src.images.length > 0 && (
                        <CustomImg key={index} imgSrc={src.images[0]} pt={"85%"}/>
                    )
                })}

            </div>
        </div>
    )
}
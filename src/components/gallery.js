import React, { useState, useEffect } from 'react';
import '../styles/gallery.css';
import img1 from "../images/gallery/img1.jpg";
import img2 from "../images/gallery/img2.jpeg";
import img3 from "../images/gallery/img3.jpeg";
import img4 from "../images/gallery/img4.jpg";
import img5 from "../images/gallery/img5.png";
import img6 from "../images/gallery/img6.jpg";
import img7 from "../images/gallery/img7.jpeg";
import img8 from "../images/gallery/img8.jpeg";
import img9 from "../images/gallery/img9.jpeg";
import img10 from "../images/gallery/img10.jpeg";

const images = [
    { id: 1, src: img1, alt: "Фото 1" },
    { id: 2, src: img4, alt: "Фото 2" },
    { id: 3, src: img3, alt: "Фото 3" },
    { id: 4, src: img6, alt: "Фото 4" },
    { id: 5, src: img2, alt: "Фото 5" },
    { id: 6, src: img5, alt: "Фото 6" },
    { id: 7, src: img7, alt: "Фото 7" },
    { id: 8, src: img8, alt: "Фото 8" },
    { id: 9, src: img9, alt: "Фото 9" },
    { id: 10, src: img9, alt: "Фото 10" },
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="sliderWrapper">
            <h1 id="headerGallery">Галерея Олимпиады</h1>
            <div className="slider">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="sliderImage"
                />
                <div className="dotsContainer">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;

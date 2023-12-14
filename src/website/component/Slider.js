import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/images/sliderImg/muskaan-banner.webp'
import slider2 from '../assets/images/sliderImg/slider2.webp'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100 slider-img"
                        src={slider1}
                        alt="muskaan ngo"
                        loading="eager"

                        rel="preload"
                        as="image"
                    /> */}

                    {/* 
                    <picture>
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner.webp')} type="image/webp" className="d-block w-100 slider-img" />
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner.avif')} type="image/avif" className="d-block w-100 slider-img" />
                        <img decoding="async" loading="lazy" src={require('../assets/images/sliderImg/muskaan-banner.webp')} alt="Muskaan ngo" rel="preload"
                            as="image" className="d-block w-100 slider-img" />
                    </picture> */}

                    <picture>
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner.webp')} type="image/webp" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner.avif')} type="image/avif" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                        <img decoding="async" loading="lazy" src={require('../assets/images/sliderImg/muskaan-banner.webp')} alt="Muskaan ngo" rel="preload" as="image" className="d-block w-100 slider-img" />
                    </picture>



                    {/* <Carousel.Caption className='banner-text'>
                        <h2>Together we<br />
                            can make a Difference</h2>
                        <p>Help today because tomorrow you may be the one who needs helping!<br />
                            Forget what you can get and see what you can give.</p>
                    </Carousel.Caption> */}

                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                        className="d-block w-100 slider-img"
                        src={slider2}
                        alt="muskaan ngo"
                        title='muskaan ngo'
                        loading="eager"
                        width="1900" height="800"
                        rel="preload" as="image"
                    /> */}


                    <picture>
                        <source srcSet={require('../assets/images/sliderImg/slider2.webp')} type="image/webp" className="d-block w-100 slider-img" />
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner.avif')} type="image/avif" className="d-block w-100 slider-img" />
                        <img decoding="async" loading="lazy" src={require('../assets/images/sliderImg/slider2.webp')} alt="Muskaan ngo" rel="preload"
                            as="image" className="d-block w-100 slider-img" />
                    </picture>

                    {/* 
                    <Carousel.Caption className='banner-text'>
                        <h2>Give a little. Change a lot.</h2>
                        <p>Help today because tomorrow you may be the one who needs helping!
                            Forget what you can get and see what you can give.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;

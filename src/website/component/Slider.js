import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/images/sliderImg/muskaan-banner.jpg'
import slider2 from '../assets/images/sliderImg/slider2.jpg'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="muskaan ngo"
                    />
                    {/* <Carousel.Caption className='banner-text'>
                        <h2>Together we<br />
                            can make a Difference</h2>
                        <p>Help today because tomorrow you may be the one who needs helping!<br />
                            Forget what you can get and see what you can give.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="muskaan ngo"
                    />
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

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Clients.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Clients = () => {

    // Use USe State here 
    const [review, setReview] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://singlespace.herokuapp.com/api/reviews')
            .then(res => res.json())
            .then(data => setReview(data.reviews))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className='lg:px-24 px-8 py-24 bg-dots'>
            <h1 className='text-3xl font-semibold text-gray-800 my-8'>From Great Our Clients</h1>
            <Slider {...settings}>
                {
                    review.map((r) => {
                        return (
                            <div key={r._id} className="py-5 my-20 lg:px-4  md:px-2  relative">
                                <div className="p-4">
                                    <img className="object-cover w-28 h-28 rounded-full absolute -top-12" src={r.ownerPhoto} alt="client" />
                                    <div className='pt-10 bg-white'>
                                        <div className="font-semibold text-xl">{r.owner}<span className='text-gray-400 font-semibold text-sm'>/ {r.ownerDesignation}</span></div>
                                        <div>
                                            <p className='text-gray-600 py-3'>{r.comment}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default Clients;
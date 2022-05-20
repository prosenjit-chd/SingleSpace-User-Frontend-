import React from 'react';
import { Flip } from 'react-reveal';

const Award = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-7 sm:grid-cols-1 lg:gap-8 gap-14 py-20 lg:px-24 md:px-12 px-8'>
                <div className='col-span-4 grid md:grid-cols-2 grid-cols-1 gap-12'>
                    <div className='flex flex-col justify-between gap-12'>
                        <Flip left>
                            <div className='relative lg:mx-0 mx-auto'>
                                <img className='float-right object-cover h-72 w-72 rounded-xl' src="https://esmart.com.bd/wp-content/uploads/2018/07/25.jpg" alt="" />
                                <img className='h-16 rounded-full border-2 border-gray-200 absolute -bottom-2 -right-2' src="https://thumbs.dreamstime.com/b/first-position-label-vector-illustration-decorative-design-188405153.jpg" alt="" />
                            </div>
                        </Flip>
                        <Flip left>
                            <div className='relative lg:mx-0 mx-auto'>
                                <img className='float-right object-cover lg:h-56 lg:w-56 h-72 w-72 rounded-xl' src="https://amecon-bd.net/sites/default/files/imagecache/500X500/products/FOLDING-CREST.jpg" alt="" />
                                <img className='h-16 rounded-full border-2 border-gray-200 absolute -bottom-2 -right-2' src="https://ih1.redbubble.net/image.2534517665.5926/st,small,845x845-pad,1000x1000,f8f8f8.jpg" alt="" />
                            </div>
                        </Flip>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <Flip left>
                            <div className='relative lg:mx-0 mx-auto w-fit'>
                                <img className='object-cover lg:h-64 lg:w-64 h-72 w-72 rounded-xl' src="https://rukminim1.flixcart.com/image/416/416/ke0a7ww0/trophy-medal/t/5/p/wooden-trophy-new-design-1-jetha-enterprises-original-imafusj6ghmdhy7c.jpeg?q=70" alt="" />
                                <img className='h-16 rounded-full border-2 border-gray-200 absolute -bottom-2  -right-2' src="https://thumbs.dreamstime.com/b/third-place-certificate-means-victory-success-winner-rd-rosette-as-celebration-medal-d-illustration-160719140.jpg" alt="" />
                            </div>
                        </Flip>
                    </div>
                </div>
                <div className='lg:col-span-3 col-span-4 flex flex-col justify-center'>
                    <div className=''>
                        <h1 className='text-3xl font-bold uppercase'>Our Achievement<br className='lg:block hidden' /> and Inspiration</h1>
                        <p className='text-sm text-gray-600 py-6 lg:text-left text-justify'>We are here to help you. We would like to offer you (free) advice on important life issues. Advice that has also helped us to live a much more meaningful life. IPerhaps you are looking for the solution to a problem. We want to help you solve your problem.</p>
                        <button type='button' className='inline mt-2 rounded-full bg-indigo-700 text-white border-2 border-indigo-700 px-5 py-2.5 text-center hover:bg-white hover:text-indigo-700'>Hire Us Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;
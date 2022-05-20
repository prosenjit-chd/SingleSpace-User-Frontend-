import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <div>
            <div className='my-20 grid lg:grid-cols-5 grid-cols-1 px-8 lg:px-24 gap-12'>
                <div className='lg:col-span-2'>
                    <h1 className='text-gray-800 text-bold text-3xl my-2'>
                        Make your software creative
                        and unique.
                    </h1>
                    <Link type="button" className="text-black bg-white font-semibold border-gray-800 text-xl border-b-2 py-1 text-center hover:text-gray-500" to="/about">HIRE US</Link>
                </div>
                <div className='lg:col-span-3'>
                    <p className='text-gray-600 text-justify'>
                        Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                        ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                        vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Description;
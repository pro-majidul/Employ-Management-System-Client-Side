import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import usePublicAxios from '../../hooks/usePublicAxios';
const Testimonial = () => {
    const [reviews, setReviews] = useState(0)
    const publicAxios = usePublicAxios()
    useEffect(() => {
        publicAxios.get('/review')
            .then(res => {
                setReviews(res.data)
            })
    }, [publicAxios])


    return (
        <section className='bg-white py-12'>
            <div className='max-w-7xl w-full mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {reviews && reviews.map(review => (

                        <SwiperSlide key={review.id}>

                            <div className="max-w-3xl w-full mx-auto px-6 lg:px-8">
                                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">What People Are Saying</h2>
                                <div className="relative">
                                    {/* Testimonial card */}
                                    <div className="text-center bg-white shadow-md rounded-lg p-6 transition-transform duration-500">
                                        <img
                                            className="w-24 h-24 mx-auto rounded-full mb-4"
                                            src={review.image}
                                            alt={review.name}
                                        />
                                        <p className="text-gray-700 mb-4">{review.comment}</p>
                                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                        <p className="text-gray-600 text-sm">{review.position}</p>
                                    </div>

                                    {/* Navigation buttons */}
                                    <div className="flex justify-between items-center mt-6">
                                        <button
                                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"

                                        >

                                        </button>
                                        <button
                                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"

                                        >

                                        </button>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;


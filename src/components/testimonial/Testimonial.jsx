import React from 'react';
import 'swiper/css';
import {HiStar} from "react-icons/hi";
import PatientAvatar from '../../assets/images/patient-avatar.png';
import { Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import './Testimonial.css'
function Testimonial(props) {
    return (
        <>
        <div className='testimonialall'>
            <div className="test-header">
            <h2>
                What our patients say
            </h2>
            <p>
                World-class care for everyone, Our health system offers <br/> unmatched, expert health-care.
            </p>
            </div>
            <div className="swiper1">
                <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable: true}}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                >
                    <SwiperSlide>
                        <div>
                            <div>
                                <img src={PatientAvatar}/>
                                <div>
                                    <h4>Muhibur Rahman</h4>

                                    <div>
                                        <HiStar color='#ffc95b' size={20} />
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                "I have taken medical services from them. They treat so well
                                and they are providing the best medical services"
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>
                                <img src={PatientAvatar}/>
                                <div>
                                    <h4>Muhibur Rahman</h4>

                                    <div>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                "I have taken medical services from them. They treat so well
                                and they are providing the best medical services"
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>
                                <img src={PatientAvatar}/>
                                <div>
                                    <h4>Muhibur Rahman</h4>

                                    <div>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                "I have taken medical services from them. They treat so well
                                and they are providing the best medical services"
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>
                                <img src={PatientAvatar}/>
                                <div>
                                    <h4>Muhibur Rahman</h4>

                                    <div>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                "I have taken medical services from them. They treat so well
                                and they are providing the best medical services"
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div>
                                <img src={PatientAvatar}/>
                                <div>
                                    <h4>Muhibur Rahman</h4>

                                    <div>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                "I have taken medical services from them. They treat so well
                                and they are providing the best medical services"
                            </p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div >
                                <img src={PatientAvatar}/>
                                <div>
                                    <h4>Muhibur Rahman</h4>

                                    <div>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                        <HiStar color='#ffc95b' size={20}/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                "I have taken medical services from them. They treat so well
                                and they are providing the best medical services"
                            </p>
                        </div>

                    </SwiperSlide>
                </Swiper>

            </div>
            </div>
        </>
    );
}

export default Testimonial;

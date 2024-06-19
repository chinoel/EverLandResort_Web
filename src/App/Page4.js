import './Page4.css';
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page4() {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const totalDocumentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const scrollRatio = scrollPosition / totalDocumentHeight;

        setScrollY(scrollRatio);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    useEffect(() => {
        const slider = document.querySelector('.slide-container');
        let currentIndex = 0;
        const slideCount = 4;
        const move = 33.3;

        function goToSlide(index) {
            currentIndex = index % slideCount;

            const x = '-' + move * currentIndex + '%';
            slider.style.transform = 'translateX(' + x + ')';
            nextSlide();
        }

        function nextSlide() {
            const slides = document.querySelectorAll('.slide-box');
            slides.forEach((slide, i) => {
                if (i === currentIndex + 1 || (i === 4 && (currentIndex === 0))) {
                    slide.classList.add('ck');
                } else {
                    slide.classList.remove('ck');
                }
            });
            const control = document.querySelectorAll('.control');
            control.forEach((con, i) => {
                if (i === currentIndex) {
                    con.classList.add('ck');
                } else {
                    con.classList.remove('ck');
                }
            });
        }

        // Set interval to call goToSlide every 3 seconds
        const intervalId = setInterval(() => {
            currentIndex++;
            goToSlide(currentIndex);

            if (currentIndex === 3) {
                setTimeout(() => {
                    slider.style.transition = 'none';
                    slider.style.transform = 'translateX(0)';
                }, 1000);

                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s';
                }, 1100);

                currentIndex = 0;
            }
            nextSlide();
        }, 3000);

        // Clear interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);




    return (
        <div className='Page4' id='Page4'>
            <div className={(scrollY > 0.45) ? 'show' : 'hide'}>
                <div className='intitle'>
                    <h6>즐거운 추억과 인생샷</h6>
                    <h3><span>PHOTO</span> ZONE</h3>
                </div>

                <div className='photo'>
                    <div className='slide-container'>
                        <div className='slide-box'>
                            <img src={i.flower_ajd} alt='flower_ajd' className='flower_ajd' />
                            <p>
                                장미 꽃멍존(9.27~10.15)<br />
                                <span>장미원 비너스원에 있는 가을 장미와 가을 꽃으로 가득한 꽃멍존에서 힐링하며 예쁜 사진을 찍고 가세요.</span>
                            </p>
                        </div>
                        <div className='slide-box'>
                            <img src={i.flower_boo} alt='flower_boo' className='flower_boo' />
                            <p>
                                가을꽃 행잉화분(9.27~10.22)<br />
                                <span>큐피트원에 있는 정원 장미로 가득한 가을꽃 행잉화분에서 인생 사진을 남겨보세요.</span>
                            </p>
                        </div>
                        <div className='slide-box'>
                            <img src={i.poo_rose} alt='poo_rose' className='poo_rose' />
                            <p>
                                푸바오 장미 테마존(9.27~10.22)<br />
                                <span>푸바오의 첫 생일 선물 기념으로 개발된 푸바오 장미! 함께 즐거운 추억을 만들어보세요.</span>
                            </p>
                        </div>

                        <div className='slide-box'>
                            <img src={i.flower_ajd} alt='flower_ajd' className='flower_ajd' />
                            <p>
                                장미 꽃멍존(9.27~10.15)<br />
                                <span>장미원 비너스원에 있는 가을 장미와 가을 꽃으로 가득한 꽃멍존에서 힐링하며 예쁜 사진을 찍고 가세요.</span>
                            </p>
                        </div>
                        <div className='slide-box'>
                            <img src={i.flower_boo} alt='flower_boo' className='flower_boo' />
                            <p>
                                가을꽃 행잉화분(9.27~10.22)<br />
                                <span>큐피트원에 있는 정원 장미로 가득한 가을꽃 행잉화분에서 인생 사진을 남겨보세요.</span>
                            </p>
                        </div>
                        <div className='slide-box'>
                            <img src={i.poo_rose} alt='poo_rose' className='poo_rose' />
                            <p>
                                푸바오 장미 테마존(9.27~10.22)<br />
                                <span>푸바오의 첫 생일 선물 기념으로 개발된 푸바오 장미! 함께 즐거운 추억을 만들어보세요.</span>
                            </p>
                        </div>


                    </div>
                    <div className='now_control'>
                        &lt;
                        <div className='control'></div>
                        <div className='control'></div>
                        <div className='control'></div>
                        &gt;
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Page4;
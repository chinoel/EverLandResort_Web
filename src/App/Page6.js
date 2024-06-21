import './Page6.css';
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page6() {


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

    return (
        <div className='Page6' id='Page6'>
            <div className={(scrollY > 0.83) ? 'show' : 'hide'}>
                <div className='table'>
                    <div className='title6'>색다른 추억</div>
                    <span>새로운 <span className='purple'>에버랜드</span></span>
                </div>

                <img src={i.leaves3} className='leaves3' alt='leaves'></img>

                <div className='slide-container'>
                    <div className='slide-box'>
                        <img src={i.everlandpick1} alt='everlandpick1'></img>
                    </div>
                    <div className='slide-box'>
                        <img src={i.everlandpick2} alt='everlandpick2' className='center'></img>
                    </div>
                    <div className='slide-box'>
                        <img src={i.everlandpick3} alt='everlandpick3'></img>
                    </div>
                </div>
                <p>솜사탕 천솜의 행복 (11.20~12.31)</p>
            </div>
        </div>
    )
};

export default Page6;
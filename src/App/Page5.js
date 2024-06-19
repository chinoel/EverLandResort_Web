import './Page5.css';
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page5() {

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
        <div className='Page5' id='Page5'>
            <div className={(scrollY > 0.45) ? 'show' : 'hide'}>
                <img src={i.kitchentable} className='background' alt='background'></img>

                <div className='table'>
                    <div className='title'>WORLD BBQ</div>
                    <span>RED & GRILL</span>
                </div>

                <div className='slide-container'>
                    <div className='slide-box'>
                        <img src={i.bbq} alt='bbq'></img>
                    </div>
                    <div className='slide-box'>
                        <img src={i.bbq1} alt='bbq'></img>
                    </div>
                    <div className='slide-box'>
                        <img src={i.bbq2} alt='bbq'></img>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page5;
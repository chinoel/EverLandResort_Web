import './Page1.css';
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page1() {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Page1">
            <div className={ (scrollY > 200 ) ? 'hide' : 'show'}>

                <img src={i.starImage} alt="star" className="star" />
                <img src={i.cloud1} alt="cloud1" className="cloud1" />
                <img src={i.cloud2} alt="cloud2" className="cloud2" />
                <img src={i.cloud3} alt="cloud3" className="cloud3" />

                <header>
                    <img src={i.everland} alt='everland' className='everland'></img>
                    <img src={i.happy} alt='happy' className='happy'></img>
                    <ul className='top_bar'>
                        <li><a href="#Page3">ARTIST</a></li>
                        <li><a href="#Page4">PHOTO ZONE</a></li>
                        <li><a href="#Page5">WORLD BBQ</a></li>
                        <li><a href="#Page6">EVENT</a></li>
                    </ul>
                </header>

                <main>
                    <img src={i.title} alt='title' className='title'></img>
                    <img src={i.scroll_down} alt='scroll_down' className='scroll_down'></img>
                </main>
            </div >
        </div>
    );
}

export default Page1;
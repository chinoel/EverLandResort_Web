import './Page2.css';
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page2() {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="Page2">
            <div className={ (scrollY > 1000 ) ? 'show' : 'hide'}>
                
            <img src={i.music1} alt="music1" className="music1" />
            <img src={i.tree} alt="tree" className="tree" />
            <img src={i.evertown} alt="evertown" className="evertown" />

            <img src={i.boos} alt="boos" className="boos" />
            <img src={i.boosshadow} alt="boosshadow" className="boosshadow" />
            <img src={i.player1} alt="player1" className="player1" />
            <img src={i.player2} alt="player2" className="player2" />
            <img src={i.player3} alt="player3" className="player3" />
            <img src={i.players} alt="players" className="players" />

            <div class="tile"></div>

            </div >
        </div>
    );
}

export default Page2;
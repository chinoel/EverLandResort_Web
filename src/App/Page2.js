import './Page2.css';
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page2() {

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
        <div className="Page2" id='Page2'>

            <img src={i.fire1} alt='fire1' className={ (scrollY > 0.13 ) ? 'fire' : 'noned'} id='fire1'></img>
            <img src={i.fire2} alt='fire2' className={ (scrollY > 0.134 ) ? 'fire' : 'noned'} id='fire2'></img>
            <img src={i.fire3} alt='fire3' className={ (scrollY > 0.138 ) ? 'fire' : 'noned'} id='fire3'></img>

            <div className={ (scrollY > 0.14 ) ? 'show' : 'hide'}>
                
            <img src={i.music1} alt="music1" className="music1" />
            <img src={i.tree} alt="tree" className="tree" />
            <img src={i.evertown} alt="evertown" className="evertown" />

            <img src={i.boos} alt="boos" className="boos" />
            <img src={i.boosshadow} alt="boosshadow" className="boosshadow" />
            <img src={i.player1} alt="player1" className="player1" />
            <img src={i.player2} alt="player2" className="player2" />
            <img src={i.player3} alt="player3" className="player3" />
            <img src={i.players} alt="players" className="players" />
            <img src={i.ytandInstar} alt="ytandInstar" className="ytandInstar" />

            <div class="tile"></div>

            </div >
        </div>
    );
}

export default Page2;
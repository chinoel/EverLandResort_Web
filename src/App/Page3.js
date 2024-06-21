import './Page3.css'
import i from './img/images';
import React, { useState, useEffect } from 'react';

function Page3() {

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
        <div className='Page3' id='Page3'>
            <div className={(scrollY > 0.35) ? 'show' : 'hide'}>
                <img src={i.music} alt='music' className='music'></img>
                <div className='Artist'>
                    <h6>당신의 청춘 마이크</h6>
                    <h3><span className='page3_artist_title'>ARTIST</span> LINE-UP</h3>
                </div>
                <section className='timeline'>
                    <ol>
                        <li>
                            <div>
                                <img src={i.kimnarin} alt='김나린'></img>
                                <time>18:00~</time>
                                <div className='line'></div>
                                <name>김나린</name>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={i.lackAlol} alt='락앤롤 크루'></img>
                                <time>18:24~</time>
                                <div className='line'></div>
                                <name>락앤롤 크루</name>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={i.goldendonet} alt='골든도넛'></img>
                                <time>18:48~</time>
                                <div className='line'></div>
                                <name>골든도넛</name>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={i.treo} alt='이한결 트리오'></img>
                                <time>19:12~</time>
                                <div className='line'></div>
                                <name>이한결 트리오</name>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={i.toriband} alt='토리밴드'></img>
                                <time>19:36~</time>
                                <div className='line'></div>
                                <name>토리밴드</name>
                            </div>
                        </li>
                    </ol>
                </section>


            </div>
        </div>
    );
}

export default Page3;
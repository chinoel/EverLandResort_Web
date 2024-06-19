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
        <div className='Page3'>
            <div className={(scrollY > 0.85) ? 'show' : 'hide'}>
                <div className='Artist'>
                    <h6>당신의 청춘 마이크</h6>
                    <h3><span className='page3_artist_title'>ARTIST</span> LINE-UP</h3>

                    <section className='timeline'>
                        <ol>
                            <li>
                                <div>
                                    <img src={i.happy} alt='김나린'></img>
                                    <time>18:00~</time>
                                    <name>김나린</name>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={i.happy} alt='락앤롤 크루'></img>
                                    <time>18:24~</time>
                                    <name>락앤롤 크루</name>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={i.happy} alt='골든도넛'></img>
                                    <time>18:48~</time>
                                    <name>골든도넛</name>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={i.happy} alt='이한결 트리오'></img>
                                    <time>19:12~</time>
                                    <name>이한결 트리오</name>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={i.happy} alt='토리밴드'></img>
                                    <time>19:36~</time>
                                    <name>토리밴드</name>
                                </div>
                            </li>
                        </ol>
                    </section>







                </div>
            </div>
        </div>
    );
}

export default Page3;
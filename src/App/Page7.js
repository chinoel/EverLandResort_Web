import './Page7.css';
import i from './img/images';

function Page7() {
    return (
        <div className='Page7'>
            <img src={i.everland} alt='everland_logo' className='title'></img>

            <ul className='top_bar'>
                <li><a href="#a">개인정보처리방침</a></li>
                <li><a href="#a">방침 개정 안내</a></li>
                <li><a href="#a">입찰공고</a></li>
                <li><a href="#a">이용약관</a></li>
            </ul>

            <p>Copyright @ Samsung C&T Corporation. All rights reserved.</p>
        </div>
    )
};

export default Page7;
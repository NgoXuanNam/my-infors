import Header from './components/Header/Header';
import Section from './components/Section/Section';
// import LoadingIcon from './components/Loading/Loading';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import Footer from './components/Footer/Footer';
import song from '~/assets/image/song.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function App() {
    // const [loading, setLoading] = useState(true);
    const [showToTop, setShowToTop] = useState(false);

    useEffect(() => {
        const handleScrollY = () => {
            // if (window.scrollY >= 200) {
            //     setShowToTop(true);
            // } else {
            //     setShowToTop(false);
            // }
            setShowToTop(window.scrollY >= 300);
        };
        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.addEventListener('scroll', handleScrollY);
        };
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 800);
    // }, []);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <div className="App">
            <Header />
            <div>
                <img src={song} alt="bg" className="w-full h-[150px]" />
            </div>
            <Section />
            <Footer />

            <a href="#home" className="fixed bottom-4 right-8">
                {showToTop && (
                    <button className="bg-[#c81717] p-3 rounded-xl animate-bounce">
                        <FontAwesomeIcon icon={faChevronUp} className=" text-[#ffffff] text-[2rem]" />
                    </button>
                )}
            </a>
        </div>
    );
}

export default App;

import React from 'react';
import envato from '~/assets/image/envato-market.png';

export default function Envato() {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="envato__content flex justify-center items-center w-[80%] min-h-[120px] bg-[#777373] ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[15px] mb-12"
        >
            <div className="envato__content-box flex justify-center items-center">
                <div className="envato__content-img w-[50%]">
                    <img src={envato} alt="img demo" className="w-[90%]" />
                </div>
                <div className="envato__content-desc w-[50%]">
                    <h2 className="text-[4.5rem] text-[#601d1d] font-medium">Envato Market</h2>
                    <h4 className="text-[3rem] font-medium">Online Envato Market</h4>
                    <p>- HTML/CSS/JavaScript</p>
                    <p>- Style Responsive</p>
                    <a
                        href="https://envato-market-nxn.netlify.app/"
                        className="p-4 text-center float-right"
                        target={'_blank'}
                    >
                        <button className="pl-3 pr-3 bg-slate-200 rounded-2xl">Live Demo</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

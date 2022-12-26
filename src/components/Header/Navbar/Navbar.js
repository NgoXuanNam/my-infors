import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Theme from './Theme';
export default function Navbar() {
    // useEffect(() => {
    //     var label = document.querySelector('.wrap-theme label');
    //     var body = document.querySelector('body');
    //     console.log(label, body);
    //     label.addEventListener('click', () => {
    //         body.classList.toggle('dark');
    //     });
    // }, []);
    return (
        <div className="navbar fixed w-full z-100 p-10  bg-[var(--background-navbar)] border-b border-white ">
            <div className="navbar-box flex justify-between items-center ml-[7rem] ">
                <a href="/" className="navbar-logo text-[4rem] font-medium uppercase text-[var(--text-white)]">
                    Xuannam
                </a>
                <input type="checkbox" id="active" className="navbar_menu-icon hidden " />

                <div className="navbar__menu-list flex justify-center items-center text-[3rem]">
                    <label htmlFor="active" className="navbar__menu-close">
                        <FontAwesomeIcon
                            icon={faPlus}
                            className=" text-[var(--text-white)] text-[3rem] hidden show-on-mobile"
                        />
                    </label>
                    <div className="navbar__menu-box flex items-center">
                        <div className="navbar__menu-item ml-12 uppercase text-[var(--text-white)] font-medium cursor-pointer">
                            <a href="#home">Home</a>
                        </div>
                        <div className="navbar__menu-item ml-12 uppercase text-[var(--text-white)] font-medium cursor-pointer">
                            <a href="#about">About me</a>
                        </div>
                        <div className="navbar__menu-item ml-12 uppercase text-[var(--text-white)] font-medium cursor-pointer">
                            <a href="#skills">Skills</a>
                        </div>
                        <div className="navbar__menu-item ml-12 uppercase text-[var(--text-white)] font-medium cursor-pointer">
                            <a href="#projects">Projects</a>
                        </div>
                    </div>
                    <Theme />
                </div>
                <label
                    htmlFor="active"
                    className="overlay absolute w-full h-[100vh] top-0 left-0 bottom-0 right-0 bg-[#00000072] hidden"
                ></label>

                <label htmlFor="active" className="navbar__menu-icon p-5 cursor-pointer hidden show-on-mobile">
                    <i className="fa fa-bars text-[var(--text-white)] text-[3rem]"></i>
                </label>
            </div>
        </div>
    );
}

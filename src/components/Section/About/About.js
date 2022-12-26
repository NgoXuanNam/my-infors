import React from 'react';
export default function About() {
    return (
        <div id="about" className="text-center mb-16">
            <div className="about__title mb-12">
                <h3 className="text-[4.5rem] font-semibold text-[var(--text-white-local)]">About Me</h3>
                <div className="h-[4px] w-[200px] bg-[var(--text-white-local)] ml-auto mr-auto rounded-xl"></div>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="about__content w-[80%] min-h-[120px] bg-[var(--background-box)] text-[var(--text-black)] ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[25px]"
            >
                <p>- I'm a new front-end developer, who just graduated</p>
                <p>- I'm working on web development skills like JavaScript, ReactJS, Tailwindcss, Bootstrap, etc.</p>
                <p>
                    - I enjoy learning everything about Front-end and I like to draw on the website with my own design
                </p>
                <p>- Future Goals: Learn more technologies and become a full-stack developer</p>
            </div>
        </div>
    );
}

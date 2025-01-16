import React from 'react';
import { useState, useEffect } from 'react';
import me2 from '../../assets/Me/me2.jpg';

const About = () => {

    return (
        <div className="flex flex-col items-center justify-center w-screen h-fit pb-6 lg:pb-8 lg:pt-[6rem]  bg-[#0f0f0f] text-gray-300">
            {/* Section Title */}
            <h1 className="text-3xl sm:text-5xl text-blue-500 font-extrabold tracking-widest text-center pb-10 animate-slideInFromTop">
                ABOUT ME
            </h1>

            {/* Main Content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 lg:gap-8 px-4 lg:px-20 lg:pt-8 max-w-screen-xl">
                {/* Column 1 - Image */}
                <div className="flex justify-center items-center animate-slideInFromLeft">
                    <img
                        src={me2}
                        alt="me"
                        className="h-[17rem] w-[11.5rem] lg:h-[31.5rem] lg:w-[95rem] rounded-2xl shadow-lg duration-300"
                        style={{
                            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                        }}
                    />
                </div>

                {/* Column 2 - Text */}
                <div className="pt-2 lg:pt-10 flex flex-col justify-center space-y-4 lg:space-y-6 text-center sm:text-left sm:pr-8 animate-slideInFromRight">
                    <p className="text-sm sm:text-lg leading-relaxed">
                        Hello, I’m <span className="text-blue-500 font-bold">William Cole</span>, a highly motivated
                        <span className="font-bold"> Computer Science and Data Science student</span>. I’m currently pursuing
                        a dual degree in Computer Systems Engineering and Data Science & AI Engineering, with a strong passion
                        for learning and creating innovative software solutions. My goal is to contribute to impactful projects
                        that merge cutting-edge technologies with meaningful user experiences.
                    </p>

                        {/* Text will not show on phones, but on larger screens it will :D */}
                    <p className="hidden lg:block lg:text-lg leading-relaxed">
                        With a foundation in <span className="font-bold">frontend</span> and <span className="font-bold">backend development</span>,
                        I specialize in crafting seamless web applications, designing scalable APIs, and integrating AI-powered tools to enhance usability.
                        I enjoy tackling complex challenges, and I’m always exploring new tools and methodologies to improve my craft.
                    </p>

                    <p className="text-base sm:text-lg font-bold leading-relaxed text-blue-500">
                        williamstevencole@gmail.com
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-5 justify-center sm:justify-start">
                        <a
                            href="https://github.com/coleexz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity duration-200"
                        >
                            <img
                                src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
                                alt="GitHub"
                                className="w-12 h-12 lg:w-16 lg:h-16"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/williamcolep_?igsh=MWJwNTNpZzloem42Yg%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity duration-200"
                        >
                            <img
                                src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                                alt="Instagram"
                                className="w-12 h-12 lg:w-16 lg:h-16"
                            />
                        </a>
                        <a
                            href="mailto:williamstevencole@gmail.com"
                            className="hover:opacity-80 transition-opacity duration-200"
                        >
                            <img
                                src="https://img.icons8.com/?size=100&id=3AYCSzCO85Qw&format=png&color=000000"
                                alt="Email"
                                className="w-12 h-12 lg:w-16 lg:h-16"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

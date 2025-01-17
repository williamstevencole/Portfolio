import React, { useRef, useState, useEffect } from 'react';
import me2 from '../../assets/Me/me2.jpg';

const About = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imageRef.current) {
                        setIsImageVisible(entry.isIntersecting);
                    }
                    if (entry.target === textRef.current) {
                        setIsTextVisible(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.00001 } // Trigger when 10% of the element is visible
        );

        if (imageRef.current) observer.observe(imageRef.current);
        if (textRef.current) observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen lg:pb-8 lg:pt-[4rem] text-gray-300 bg-[#0f0f0f]">
            {/* Section Title */}
            <h1 className="text-3xl sm:text-5xl text-blue-500 font-extrabold tracking-widest text-center pb-10">
                ABOUT ME
            </h1>

            {/* Main Content */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 lg:gap-8 px-4 lg:px-20 lg:pt-2 max-w-screen-xl">
                {/* Column 1 - Image */}
                <div
                    ref={imageRef}
                    className={`flex justify-center items-center transition-all duration-700 ${
                        isImageVisible ? 'animate-slideInFromLeft' : 'opacity-0 translate-x-[-100px]'
                    }`}
                >
                    <img
                        src={me2}
                        alt="me"
                        className="object-cover h-[17rem] w-[11.5rem] lg:h-[31.5rem] lg:w-[95rem] rounded-2xl shadow-lg duration-300"
                        style={{
                            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                        }}
                    />
                </div>

                {/* Column 2 - Text */}
                <div
                    ref={textRef}
                    className={`pt-2 lg:pt-10 flex flex-col justify-start space-y-4 lg:space-y-6 text-start transition-all duration-700 ${
                        isTextVisible ? 'animate-slideInFromRight' : 'opacity-0 translate-x-[100px]'
                    }`}
                >
                    <p className="text-xs sm:text-sm lg:text-lg leading-relaxed">
                        Hello, I’m <span className="text-blue-500 font-bold">William Cole</span>. I’m currently pursuing
                        a dual degree in <span className="text-blue-500 font-bold">Computer Systems Engineering</span> and
                        <span className="text-blue-500 font-bold"> Data Science & AI Engineering</span>, with a strong passion
                        for learning and creating innovative software solutions. My goal is to contribute to impactful projects
                        that merge cutting-edge technologies with meaningful user experiences.
                    </p>

                    <p className="hidden lg:block lg:text-lg leading-relaxed">
                        With a foundation in <span className="text-blue-500 font-bold">frontend</span> and <span className="text-blue-500 font-bold">backend development</span>,
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

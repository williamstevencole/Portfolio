import { useState, useEffect } from 'react';
import me3 from '../../assets/Me/me3.jpeg';

const Home = () => {
    const titles = [
        "Computer Science Engineer Student",
        "Data Science & AI Engineer Student",
        "Backend Developer",
        "Frontend Developer",
    ];

    const [currentTitle, setCurrentTitle] = useState("");
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const current = titles[currentTitleIndex];
            if (isDeleting) {
                setCurrentTitle((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                }
            } else {
                setCurrentTitle((prev) => current.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);

                if (charIndex === current.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const typingSpeed = 70;
        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [titles, currentTitleIndex, isDeleting, charIndex]);

    return (
        <div className="h-screen w-screen lg:pt-[1.5rem] grid grid-cols-1 lg:grid-cols-2 ">
            {/* Text Section */}
            <div className="order-2 lg:order-1 bg-white font pt-14 px-4 lg:ps-10 lg:py-[13rem] lg:space-y-2 relative animate-slideInFromLeft text-center lg:text-left">
                <h1 className="font-extrabold text-4xl lg:text-6xl text-[#020C18]">
                    Hi, I&apos;m William
                </h1>
                <div className="pt-4 flex flex-col lg:flex-row items-center lg:items-baseline">
                    <h3 className="text-gray-400 font-bold text-xl lg:text-3xl ">
                        I&apos;m a&nbsp;
                    </h3>
                    <span
                        className="font-bold text-xl lg:text-3xl text-[#020C18] pr-4 border-orange-500 break-words lg:whitespace-nowrap"
                    >
                        {currentTitle}
                    </span>
                </div>
                <p className="text-black text-base font-semibold lg:text-lg pt-2 lg:pr-16 leading-relaxed">
                    I'm pursuing a dual degree in Computer Systems Engineering and Data Science & AI Engineering, currently halfway through my studies.
                    Driven by a passion for continuous learning, I’m deepening my skills in web development, and software development.
                </p>
                {/* Contact Button */}
                <div className="flex items-center justify-center lg:items-start lg:justify-start pt-2 lg:pt-4 w-full">
                    <a
                        href="/WilliamCole_CV.pdf"
                        download="WilliamCole_CV.pdf"
                        className="bg-[#020C18] text-white py-2 px-4 lg:py-4 lg:px-6 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center gap-2"
                    >
                        <div className="pb-1">
                            <img
                                src="https://img.icons8.com/ios-filled/50/FFFFFF/download.png"
                                alt="Download Icon"
                                className="w-4 h-4 lg:w-5 lg:h-5"
                            />
                        </div>
                        <span className="text-sm lg:text-base">Download my CV</span>
                    </a>
                </div>
            </div>
            {/* Image Section */}
            <div className="order-1 lg:order-2 bg-[#020C18]  py-12 flex justify-center items-center animate-slideInFromRight shadow-none">
                <div
                    className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundColor: "#0f0f0f",
                        animation: "rgbSpin1 3s linear infinite",
                    }}
                >
                    <style>
                        {`
                            @keyframes rgbSpin1 {
                                0% {
                                    box-shadow: 0 0 20px 10px rgba(255, 255, 255,  1),
                                                0 0 60px 30px rgba(255, 255, 255,  0.8),
                                                20px 0 40px rgba(255, 255, 255,  0.5);
                                }
                                25% {
                                    box-shadow: -20px 0 20px rgba(255, 255, 255,  1),
                                                0 0 60px 30px rgba(255, 255, 255,  0.8),
                                                0 20px 40px rgba(255, 255, 255,  0.5);
                                }
                                50% {
                                    box-shadow: 0 0 20px 10px rgba(255, 255, 255,  1),
                                                0 -20px 60px rgba(255, 255, 255,  0.8),
                                                -20px 0 40px rgba(255, 255, 255,  0.5);
                                }
                                75% {
                                    box-shadow: 20px 0 20px rgba(255, 255, 255,  1),
                                                0 0 60px 30px rgba(255, 255, 255,  0.8),
                                                0 -20px 40px rgba(255, 255, 255,  0.5);
                                }
                                100% {
                                    box-shadow: 0 0 20px 10px rgba(255, 255, 255,  1),
                                                0 0 60px 30px rgba(255, 255, 255,  0.8),
                                                20px 0 40px rgba(255, 255, 255,  0.5);
                                }
                            }
                        `}
                    </style>
                    <div className="pt-36">
                        <img
                            src={me3}
                            alt="William Cole"
                            className="w-[15rem] h-[24rem] lg:w-[27.9rem] lg:h-[38rem] lg:object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

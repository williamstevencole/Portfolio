import React, { useState, useEffect, useRef } from 'react';

import Infectext from '../../assets/ProjectImages/Infectext.png';
import Image2048 from '../../assets/ProjectImages/2048.png';
import Copeco from '../../assets/ProjectImages/Copeco.png';
import SPSScript from '../../assets/ProjectImages/SPSScript.png';
import Webhub from '../../assets/ProjectImages/Webhub.png';

import text2048 from '../../assets/ProjectDescriptions/2048Desc';
import textInfectext from '../../assets/ProjectDescriptions/InfectextDesc';
import textCopeco from '../../assets/ProjectDescriptions/CopecoDesc';
import textSPS from '../../assets/ProjectDescriptions/SPSScriptDesc';
import textHub from '../../assets/ProjectDescriptions/WebhubDesc';

const workTitle = ['COPECO', 'Webhub', 'SPS Script', '2048', 'Infectext'];
const images = [Copeco, Webhub, SPSScript, Image2048, Infectext];
const descriptions = [
    textCopeco,
    textHub,
    textSPS,
    text2048,
    textInfectext,
];

const Work = () => {
    const titleRef = useRef(null);
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsTitleVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when 50% of the title is visible
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) observer.disconnect();
        };
    }, []);

    const [visibleProjects, setVisibleProjects] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4500);
        return () => clearInterval(interval);
    }, [visibleProjects]);

    const handleNext = () => {
        setVisibleProjects((prev) => {
            const nextIndex = (prev[prev.length - 1] + 1) % workTitle.length;
            return [...prev.slice(1), nextIndex];
        });
    };

    const handlePrev = () => {
        setVisibleProjects((prev) => {
            const prevIndex = (prev[0] - 1 + workTitle.length) % workTitle.length;
            return [prevIndex, ...prev.slice(0, -1)];
        });
    };

    return (
        <div className="flex align-center justify-center h-screen lg:h-screen lg:w-screen pt-5 pb-7  bg-[#b21e35] ">
            <div className="flex flex-col items-center justify-center pt-10 lg:pb-20">
                {/* Project Title */}
                <h1
                    ref={titleRef}
                    className={`text-3xl sm:text-5xl text-[#641220] font-extrabold pb-10 lg:pb-16 lg:pt-6 tracking-widest transition-all duration-700 ${
                        isTitleVisible ? 'animate-slideInFromTop' : 'opacity-0 translate-y-10'
                    }`}
                >
                    PROJECTS
                </h1>

                {/* Carousel */}
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={handlePrev}
                        className="absolute left-[-4rem] bg-blue-950 text-white p-4 rounded-full hover:bg-blue-800 transition"
                    >
                        &#8592;
                    </button>

                    <div className="flex gap-10">
                        {visibleProjects.map((index, position) => (
                            <div
                                key={index}
                                className={`relative h-[30rem] w-[15rem] rounded-2xl overflow-hidden transition-transform duration-[1500ms] ease-in-out transform ${
                                    position === 1
                                        ? 'scale-105 z-10'
                                        : position === 0
                                        ? 'rotate-y--10 scale-90'
                                        : 'rotate-y-10 scale-90'
                                }`}
                                style={{
                                    backgroundColor: '#a11d30',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                                    transform:
                                        position === 1
                                            ? 'scale(1.05)'
                                            : position === 0
                                            ? 'perspective(800px) rotateY(-10deg)'
                                            : 'perspective(800px) rotateY(10deg)',
                                }}
                            >
                                <img
                                    src={images[index]}
                                    alt={workTitle[index]}
                                    className="w-full h-[13rem] object-cover"
                                />

                                <div className="absolute top-[11.2rem] left-0 right-0 px-4 text-white text-center">
                                    <h1 className="text-2xl font-bold">{workTitle[index]}</h1>
                                    <p className="text-[0.75rem] lg:text-[0.75rem] pt-2">{descriptions[index]}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-[-4rem] bg-blue-950 text-white p-4 rounded-full hover:bg-blue-800 transition"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Work;

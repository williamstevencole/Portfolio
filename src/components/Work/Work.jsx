import React, { useState, useEffect } from 'react';

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
    const [visibleProjects, setVisibleProjects] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
        handleNext();
        }, 3000);
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
        <div className="flex align-center justify-center h-fit w-screen pb-[5rem] lg:pb-20 lg:pt-10">
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-3xl sm:text-5xl text-blue-500 font-extrabold pt-4 pb-10 lg:pb-16 lg:pt-12 sm:pt-[50px] tracking-widest animate-slideInFromTop">
                    PROJECTS
                </h1>

                <div className="relative flex items-center justify-center">
                    <button
                        onClick={handlePrev}
                        className="absolute left-[-4rem] bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition animate-slideInFromLeft"
                    >
                        &#8592;
                    </button>

                    <div className="flex gap-10 animate-slideInFromLeft">
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
                                    backgroundColor: '#1c1a1a',
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
                                    <p className="text-[0.75rem] lg:text-[0.75rem] pt-2 ">{descriptions[index]}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-[-4rem] bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition animate-slideInFromRight"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Work;

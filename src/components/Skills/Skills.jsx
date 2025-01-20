import React, { useRef, useEffect, useState } from 'react';

const skills = [
    { name: 'Express.js', logo: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000' },
    { name: 'TypeScript', logo: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' },
    { name: 'Docker', logo: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000' },
    { name: 'Git', logo: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
    { name: 'PostgreSQL', logo: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000' },
    { name: 'SQL Server', logo: 'https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png&color=000000' },
    { name: 'HTML', logo: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { name: 'CSS', logo: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { name: 'Tailwind', logo: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000' },
    { name: 'JavaScript', logo: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
    { name: 'React', logo: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000' },
    { name: 'MongoDB', logo: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
    { name: 'Python', logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' },
    { name: 'C++', logo: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000' },
    { name: 'Java', logo: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
];

const Skills = () => {
    const gridRef = useRef(null);
    const textRef = useRef(null);
    const [visibleCards, setVisibleCards] = useState(new Set()); // Tracks visible cards
    const [isTextVisible, setIsTextVisible] = useState(false); // Tracks visibility of the text

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);

                    if (entry.target.dataset.type === 'text') {
                        setIsTextVisible(entry.isIntersecting);
                    } else if (!isNaN(index)) {
                        setVisibleCards((prev) => {
                            const updated = new Set(prev);
                            if (entry.isIntersecting) {
                                updated.add(index);
                            } else {
                                updated.delete(index);
                            }
                            return updated;
                        });
                    }
                });
            },
            {
                root: null, // Defaults to the viewport
                threshold: 0.4, // Trigger visibility at 20% in the viewport
            }
        );

        if (gridRef.current) {
            Array.from(gridRef.current.children).forEach((child) => observer.observe(child));
        }

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-fit bg-[#081714] text-gray-300 pt-12 lg:pt-[2.4rem] lg:pb-20 px-4 pb-12">
            {/* Section Title */}
            <h1
                ref={textRef}
                data-type="text"
                className={`text-3xl xs:text-3xl sm:text-4xl lg:text-5xl text-blue-800 font-extrabold tracking-widest text-center pb-2 lg:pb-3 lg:pt-6 transition-all duration-500 ${
                    isTextVisible ? 'animate-slideInFromTop opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                SKILLS
            </h1>

            <p
                className={`text-base sm:text-lg lg:text-xl text-center px-4 lg:px-20 pb-2 lg:pb-4 transition-all duration-500 ${
                    isTextVisible ? 'animate-slideInFromTop opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                Here are some of the technologies I've worked with:
            </p>

            {/* Skills Grid */}
            <div
                ref={gridRef}
                className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 "
            >
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        data-index={index}
                        className={`flex flex-col items-center justify-center bg-[#011933] p-2 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
                            visibleCards.has(index)
                                ? 'animate-slideInFromBottom opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                        }`}
                        style={{
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-24 lg:w-24 mb-4"
                        />
                        <h3 className="justify-center text-base sm:text-lg lg:text-xl font-semibold text-gray-200">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

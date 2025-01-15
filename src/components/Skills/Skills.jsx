import React from 'react';

const skills = [
    {
        id: 1,
        name: 'HTML',
        logo: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
        description: 'Markup language for structuring web content.',
    },
    {
        id: 2,
        name: 'CSS',
        logo: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
        description: 'Styling language for designing web content.',
    },
    {
        id: 3,
        name: 'JavaScript',
        logo: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000',
        description: 'High-level programming language for web development.',
    },
    {
        id: 4,
        name: 'React',
        logo: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000',
        description: 'JavaScript library for building UIs.',
    },
    {
        id: 5,
        name: 'Express.js',
        logo: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000',
        description: 'Minimalist web framework for Node.js.',
    },
    {
        id: 6,
        name: 'PostgreSQL',
        logo: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000',
        description: 'Open-source relational database.',
    },
    {
        id: 7,
        name: 'MongoDB',
        logo: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000',
        description: 'NoSQL database for flexible data models.',
    },
    {
        id: 8,
        name: 'Python',
        logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
        description: 'Versatile programming language.',
    },
    {
        id: 9,
        name: 'C++',
        logo: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000',
        description: 'High-performance programming language.',
    },
    {
        id: 10,
        name: 'Java',
        logo: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000',
        description: 'Popular language for enterprise applications.',
    },
    {
        id: 11,
        name: 'Docker',
        logo: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000',
        description: 'Platform for containerized applications.',
    },
    {
        id: 12,
        name: 'Git',
        logo: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000',
        description: 'Version control system for code.',
    },
];

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-fit bg-[#0f0f0f] text-gray-300 pt-[3rem] px-4">
            {/* Section Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-blue-500 font-extrabold tracking-widest text-center pb-10 animate-slideInFromTop">
                SKILLS
            </h1>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 ">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center justify-center bg-[#1c1a1a] p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl animate-slideInFromBottom"
                        style={{
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mb-4"
                        />
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-200">
                            {skill.name}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-400 text-center mt-2">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

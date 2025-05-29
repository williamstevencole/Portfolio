import React, { useRef, useEffect, useState } from "react";

const Skills = () => {
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const skills = [
    {
      name: "React",
      logo: "https://img.icons8.com/?size=100&id=123603&format=png&color=007AFF",
    },
    {
      name: "JavaScript",
      logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=007AFF",
    },
    {
      name: "TypeScript",
      logo: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=007AFF",
    },
    {
      name: "Node.js",
      logo: "https://img.icons8.com/?size=100&id=54087&format=png&color=007AFF",
    },
    {
      name: "Python",
      logo: "https://img.icons8.com/?size=100&id=13441&format=png&color=007AFF",
    },
    {
      name: "HTML",
      logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=007AFF",
    },
    {
      name: "CSS",
      logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=007AFF",
    },
    {
      name: "Tailwind",
      logo: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=007AFF",
    },
    {
      name: "Git",
      logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=007AFF",
    },
    {
      name: "MongoDB",
      logo: "https://img.icons8.com/?size=100&id=74402&format=png&color=007AFF",
    },
    {
      name: "SQL",
      logo: "https://img.icons8.com/?size=100&id=13415&format=png&color=007AFF",
    },
    {
      name: "Docker",
      logo: "https://img.icons8.com/?size=100&id=22813&format=png&color=007AFF",
    },
  ];

  useEffect(() => {
    const observeVisibility = (ref, callback) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => callback(true), 100);
          } else {
            callback(false);
          }
        },
        { threshold: 0.001 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    };

    const titleObserver = observeVisibility(titleRef, setIsTitleVisible);
    const skillsObserver = observeVisibility(skillsRef, setIsSkillsVisible);

    return () => {
      titleObserver();
      skillsObserver();
    };
  }, []);

  return (
    <div className="h-fit w-full flex flex-col items-center justify-start bg-[#1a1a1a]">
      <div className="w-full py-10 px-6 flex justify-center items-center">
        <h1
          ref={titleRef}
          className={`text-3xl sm:text-5xl font-extrabold tracking-widest text-white text-center lg:pb-1 transition-all duration-700 ${
            isTitleVisible
              ? "animate-slideInFromTop"
              : "opacity-0 translate-y-10"
          }`}
        >
          MY SKILLS
        </h1>
      </div>

      <div
        ref={skillsRef}
        className={`w-full max-w-7xl px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 transition-all duration-700 ${
          isSkillsVisible
            ? "animate-slideInFromBottom"
            : "opacity-0 translate-y-20"
        }`}
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-[#2d2d2d] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#3d3d3d] flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-white font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

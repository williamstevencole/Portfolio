import { useRef, useState, useEffect } from "react";
import me2 from "../../assets/Me/me2.jpg";

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

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

    const imageObserver = observeVisibility(imageRef, setIsImageVisible);
    const textObserver = observeVisibility(textRef, setIsTextVisible);

    return () => {
      imageObserver();
      textObserver();
    };
  }, []);

  return (
    <div className="h-fit w-full flex flex-col items-center justify-start bg-[#1a1a1a] py-10">
      <div className="w-full px-6 flex justify-center items-center">
        <h1
          className={`text-3xl sm:text-5xl font-extrabold tracking-widest text-white text-center lg:pb-1 transition-all duration-700 ${
            isImageVisible
              ? "animate-slideInFromTop"
              : "opacity-0 translate-y-10"
          }`}
        >
          ABOUT ME
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full h-fit">
        {/* Left Column (Image Section) */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div
            ref={imageRef}
            className={`w-full max-w-md transition-all duration-700 ${
              isImageVisible
                ? "animate-slideInFromLeft"
                : "opacity-0 translate-x-[-100px]"
            }`}
          >
            <img
              src={me2}
              alt="William Cole"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Column (Text Section) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
          <div
            ref={textRef}
            className={`flex flex-col items-center md:items-start text-center md:text-left max-w-full md:max-w-lg space-y-8 transition-all duration-700 ${
              isTextVisible
                ? "animate-slideInFromRight"
                : "opacity-0 translate-x-[100px]"
            }`}
          >
            <div className="w-full">
              <h3 className="text-2xl font-bold text-white pb-4">WHO AM I?</h3>
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2d2d2d]">
                <p className="text-[#a0a0a0] text-sm sm:text-lg leading-relaxed">
                  I am William Cole, a passionate software developer pursuing a
                  dual degree in Computer Systems Engineering and Data Science &
                  AI Engineering. Currently halfway through my studies, I am
                  deeply committed to expanding my knowledge and skills in
                  software development.
                </p>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-2xl font-bold text-white pb-4">MY JOURNEY</h3>
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2d2d2d]">
                <p className="text-[#a0a0a0] text-sm sm:text-lg leading-relaxed">
                  My journey in technology began with a curiosity for how things
                  work. This led me to pursue a comprehensive education that
                  combines both hardware and software aspects of computing. I am
                  particularly interested in web development and software
                  engineering, where I can apply my knowledge to create
                  meaningful solutions.
                </p>
              </div>
            </div>

            <div className="w-full">
              <h3 className="text-2xl font-bold text-white pb-4">
                CONNECT WITH ME
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/william-cole-1a5737368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2d2d2d] transition duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-[#2d2d2d]"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=FFFFFF"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/coleexz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2d2d2d] transition duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-[#2d2d2d]"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/william.cole_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#2d2d2d] transition duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-[#2d2d2d]"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=32323&format=png&color=FFFFFF"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

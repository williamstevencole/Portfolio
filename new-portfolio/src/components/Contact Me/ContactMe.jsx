import React, { useEffect, useRef, useState } from "react";
import me3 from "../../assets/Me/me3.jpeg";

const ContactMe = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const contactRef = useRef(null);

  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

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
    const textObserver = observeVisibility(textRef, setIsTextVisible);
    const contactObserver = observeVisibility(contactRef, setIsContactVisible);

    return () => {
      titleObserver();
      textObserver();
      contactObserver();
    };
  }, []);

  return (
    <div className="h-fit w-full flex flex-col items-center justify-start bg-[#1a1a1a] overflow-y-hidden">
      <div className="w-full py-10 px-6 flex justify-center items-center">
        <h1
          ref={titleRef}
          className={`text-3xl sm:text-5xl font-extrabold tracking-widest text-white text-center lg:pb-1 transition-all duration-700 ${
            isTitleVisible
              ? "animate-slideInFromTop"
              : "opacity-0 translate-y-10"
          }`}
        >
          LET&#39;S WORK TOGETHER!
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full h-fit">
        {/* Left Column (Text Section) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-[#1a1a1a] p-6 md:p-12">
          <div
            ref={textRef}
            className={`flex flex-col items-center md:items-start text-center md:text-left max-w-full md:max-w-lg space-y-8 transition-all duration-700 ${
              isTextVisible
                ? "animate-slideInFromRight"
                : "opacity-0 translate-x-[100px]"
            }`}
          >
            {/* Contact Me */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-white pb-4">CONTACT ME</h3>
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2d2d2d]">
                <p className="text-[#a0a0a0] text-sm sm:text-lg">
                  E-mail:{" "}
                  <span className="text-[#007AFF] font-semibold">
                    williamstevencole@gmail.com
                  </span>
                </p>
              </div>
            </div>

            {/* Let's Connect */}
            <div
              ref={contactRef}
              className={`w-full transition-all duration-700 ${
                isContactVisible
                  ? "animate-slideInFromLeft"
                  : "opacity-0 translate-x-[-100px]"
              }`}
            >
              <h3 className="text-2xl font-bold text-white pb-4">
                LET&#39;S CONNECT
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
              </div>
            </div>

            {/* Footer */}
            <div className="pt-8 w-full text-center md:text-left">
              <p className="text-[#a0a0a0] text-sm">
                <span className="text-white font-semibold">
                  @2025 William Cole
                </span>{" "}
                <br />
                Made with <span className="text-[#007AFF]">❤️</span> and{" "}
                <span className="text-[#007AFF]">☕</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (Image Section) */}
        <div className="w-full md:w-1/2 bg-[#1a1a1a] flex justify-center items-center p-6 md:p-12">
          <div
            className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: "#1a1a1a",
              animation: "rgbSpin 3s linear infinite",
            }}
          >
            <style>
              {`
                @keyframes rgbSpin {
                    0% {
                        box-shadow: 0 0 20px 10px rgba(0, 122, 255, 0.3),
                                    0 0 60px 30px rgba(0, 122, 255, 0.2),
                                    20px 0 40px rgba(0, 122, 255, 0.1);
                    }
                    25% {
                        box-shadow: -20px 0 20px rgba(0, 122, 255, 0.3),
                                    0 0 60px 30px rgba(0, 122, 255, 0.2),
                                    0 20px 40px rgba(0, 122, 255, 0.1);
                    }
                    50% {
                        box-shadow: 0 0 20px 10px rgba(0, 122, 255, 0.3),
                                    0 -20px 60px rgba(0, 122, 255, 0.2),
                                    -20px 0 40px rgba(0, 122, 255, 0.1);
                    }
                    75% {
                        box-shadow: 20px 0 20px rgba(0, 122, 255, 0.3),
                                    0 0 60px 30px rgba(0, 122, 255, 0.2),
                                    0 -20px 40px rgba(0, 122, 255, 0.1);
                    }
                    100% {
                        box-shadow: 0 0 20px 10px rgba(0, 122, 255, 0.3),
                                    0 0 60px 30px rgba(0, 122, 255, 0.2),
                                    20px 0 40px rgba(0, 122, 255, 0.1);
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
    </div>
  );
};

export default ContactMe;

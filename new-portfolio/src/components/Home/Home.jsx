import { useState, useEffect } from "react";
import me3 from "../../assets/Me/me3.jpeg";

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
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-[#1a1a1a] pt-20 overflow-y-hidden">
      {/* Text Section */}
      <div className="order-2 lg:order-1 px-6 lg:pl-32 py-12 lg:py-24 flex flex-col justify-center animate-slideInFromLeft text-center lg:text-left">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Hi, I&apos;m William
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-2 mb-8">
            <h3 className="text-[#a0a0a0] font-bold text-xl lg:text-3xl">
              I&apos;m a&nbsp;
            </h3>
            <span className="font-bold text-xl lg:text-3xl text-[#007AFF] pb-2 pr-4 border-b-2 border-[#007AFF] break-words lg:whitespace-nowrap">
              {currentTitle}
            </span>
          </div>
          <p className="text-[#a0a0a0] text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-12">
            I'm pursuing a dual degree in Computer Systems Engineering and Data
            Science & AI Engineering, currently halfway through my studies.
            Driven by a passion for continuous learning, I'm deepening my skills
            in web development, and software development.
          </p>
          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="/WilliamCole_CV.pdf"
              download="WilliamCole_CV.pdf"
              className="w-full sm:w-auto bg-[#007AFF] text-white py-3 px-8 rounded-lg hover:bg-[#0056b3] transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <div className="pb-1">
                <img
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/download.png"
                  alt="Download Icon"
                  className="w-5 h-5"
                />
              </div>
              <span className="text-base font-semibold">Download CV</span>
            </a>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#section-4"
                className="w-full sm:w-auto bg-[#2d2d2d] text-white py-3 px-8 rounded-lg hover:bg-[#3d3d3d] transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="order-1 lg:order-2  flex justify-center items-center p-6 lg:p-12 animate-slideInFromRight">
        <div
          className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: "#1a1a1a",
            animation: "rgbSpin1 3s linear infinite",
          }}
        >
          <style>
            {`
              @keyframes rgbSpin1 {
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
  );
};

export default Home;

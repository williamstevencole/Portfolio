import React from "react";
import me from "../../assets/Me/me.png";

const ContactMe = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center pt-[3rem] lg:pt-[8rem] px-6 sm:px-10 text-white">
        {/* Section Title */}
        <div className="w-full flex justify-center items-center">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-widest text-blue-500 animate-slideInFromTop text-center">
            LET&#39;S WORK TOGETHER!
            </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40 py-[4rem] md:py-[3.5rem]">
            {/* Image Section */}
            <div className="animate-slideInFromLeft flex justify-center">
            <div
                className="w-[12rem] h-[12rem] sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden flex items-center justify-center"
                style={{
                backgroundColor: "#0f0f0f",
                animation: "rgbSpin 3s linear infinite",
                }}
            >
                <style>
                {`
                    @keyframes rgbSpin {
                    0% {
                        box-shadow: 0 0 20px 10px rgba(0, 0, 255, 1),
                                    0 0 60px 30px rgba(0, 0, 255, 0.8),
                                    20px 0 40px rgba(0, 0, 255, 0.5);
                    }
                    25% {
                        box-shadow: -20px 0 20px rgba(0, 0, 255, 1),
                                    0 0 60px 30px rgba(0, 0, 255, 0.8),
                                    0 20px 40px rgba(0, 0, 255, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 20px 10px rgba(0, 0, 255, 1),
                                    0 -20px 60px rgba(0, 0, 255, 0.8),
                                    -20px 0 40px rgba(0, 0, 255, 0.5);
                    }
                    75% {
                        box-shadow: 20px 0 20px rgba(0, 0, 255, 1),
                                    0 0 60px 30px rgba(0, 0, 255, 0.8),
                                    0 -20px 40px rgba(0, 0, 255, 0.5);
                    }
                    100% {
                        box-shadow: 0 0 20px 10px rgba(0, 0, 255, 1),
                                    0 0 60px 30px rgba(0, 0, 255, 0.8),
                                    20px 0 40px rgba(0, 0, 255, 0.5);
                    }
                    }
                `}
                </style>
                <img
                src={me}
                alt="William Cole"
                className="w-[10rem] h-[14rem] sm:w-[18rem] sm:h-[24rem] md:w-[24rem] md:h-[32rem] object-scale-down rounded-full"
                />
            </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-full md:max-w-lg space-y-6 sm:space-y-8 animate-slideInFromRight">
            {/* Contact Me */}
            <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 pb-2">
                CONTACT ME
                </h3>
                <p className="text-gray-300 text-sm sm:text-lg">
                E-mail:{" "}
                <span className="text-white font-semibold">
                    williamstevencole@gmail.com
                </span>
                </p>
            </div>

            {/* Let's Connect */}
            <div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-500 pb-4">
                LET&#39;S CONNECT
                </h3>
                <div className="space-x-2 sm:space-x-4">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                    LinkedIn
                </button>
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                    GitHub
                </button>
                </div>
            </div>

            {/* Footer */}
            <div className="pt-1">
                <p className="text-gray-300 text-sm font-extralight">
                <span className="text-white font-semibold">@2025 William Cole</span>{" "}
                <br />
                Made with <span className="text-yellow-400">❤️</span> and{" "}
                <span className="text-green-400">☕</span>
                </p>
            </div>
            </div>
        </div>
        </div>

  );
};

export default ContactMe;

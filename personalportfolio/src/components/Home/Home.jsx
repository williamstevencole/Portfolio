import React from 'react';
import me from '../../assets/me.png';

const Home = () => {
    return (
        <div
            className="pt-[11rem] grid grid-cols-2 min-h-screen"
            style={{ backgroundColor: '#1a1a1c', color: '#e0e0e0' }} // Grey tones for background and text
        >
            {/* Left Section */}
            <div className="font py-20 pl-20 col-start-0 relative">
                <h1 className="font-extrabold text-6xl text-red-500">
                    Hi, I&apos;m William
                </h1>
                <h3 className="font-bold text-3xl pt-4 text-gray-300">
                    Computer Systems Student
                </h3>
                <p className="text-lg pt-4 pe-16 text-gray-400 leading-relaxed">
                    I am a Computer Systems student at UNITEC. I am passionate about software
                    development and I am always looking for new opportunities to learn and grow.
                </p>
                {/* Contact Button */}
                    <div className="mt-4">
                        <button
                            className="bg-red-500 text-white py-3 px-8 rounded-xl hover:bg-red-600 transition duration-300"
                        >
                            Contact Me
                        </button>
                    </div>
            </div>

            {/* Right Section */}
            <div
                className="col-start-2 pr-[8rem] flex justify-end pb-10 relative"
                style={{ zIndex: 0 }}
            >
                <div
                    className="w-[30rem] h-[30rem] rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                        boxShadow: '0 0 20px 10px rgba(255, 0, 0, 1), 0 0 60px 30px rgba(255, 0, 0, 0.8)',
                        backgroundColor: '#1a1a1c',
                    }}
                >
                    <img
                        src={me}
                        alt="William Cole"
                        className="w-[24rem] h-[32rem] object-scale-down rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

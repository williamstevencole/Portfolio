import React, { useState } from 'react';


import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Work from './components/Work/Work.jsx'
import ContactMe from './components/Contact Me/ContactMe.jsx'

// CSS animations
import './App.css';

const App = () => {
    // List of pages
    const pages = [
        { id: 0, component: <Home />, name: 'Home' },
        { id: 1, component: <About />, name: 'About' },
        { id: 2, component: <Work />, name: 'Work' },
        { id: 3, component: <ContactMe />, name: 'Contact' },
    ];

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [animation, setAnimation] = useState(''); // For controlling slide animations

    // Handle navigation to the next page
    const handleNext = () => {
        if (currentPageIndex < pages.length - 1) {
            setAnimation('slideOutToTop'); // Set slide-out animation
            setTimeout(() => {
                setCurrentPageIndex((prev) => prev + 1);
                setAnimation('slideInFromBottom'); // Set slide-in animation
            }, 300); // Match animation duration
        }
    };

    // Handle navigation to the previous page
    const handlePrev = () => {
        if (currentPageIndex > 0) {
            setAnimation('slideOutToBottom'); // Set slide-out animation
            setTimeout(() => {
                setCurrentPageIndex((prev) => prev - 1);
                setAnimation('slideInFromTop'); // Set slide-in animation
            }, 300); // Match animation duration
        }
    };

    return (
        <div className="w-screen h-screen overflow-hidden relative">
            {/* Page Component */}
            <div className={`page-container ${animation}`}>
                {pages[currentPageIndex].component}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-between px-10">
                {currentPageIndex > 0 && (
                    <button
                        onClick={handlePrev}
                        className="bg-gray-700 text-white py-3 px-6 rounded-full hover:bg-gray-800"
                    >
                        ↑ Previous
                    </button>
                )}
                {currentPageIndex < pages.length - 1 && (
                    <button
                        onClick={handleNext}
                        className="bg-gray-700 text-white py-3 px-6 rounded-full hover:bg-gray-800 ml-auto"
                    >
                        ↓ Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default App;

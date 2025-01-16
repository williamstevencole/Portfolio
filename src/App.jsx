import React, { useState, useRef, useEffect } from 'react';

// Import your page components
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Work from './components/Work/Work.jsx';
import Skills from './components/Skills/Skills.jsx';
import ContactMe from './components/Contact Me/ContactMe.jsx';

// CSS animations
import './App.css';

const App = () => {
    const pages = [
        { id: 0, component: <Home />, name: 'Home' },
        { id: 1, component: <About />, name: 'About' },
        { id: 2, component: <Skills />, name: 'Skills' },
        { id: 3, component: <Work />, name: 'Work' },
        { id: 4, component: <ContactMe />, name: 'Contact' },
    ];

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef(null);
    const [rerenderKey, setRerenderKey] = useState(0); // Key for forcing re-render

    const handleScroll = () => {
        if (!containerRef.current) return;

        const { scrollTop, offsetHeight } = containerRef.current;
        const newPageIndex = Math.round(scrollTop / offsetHeight);

        if (newPageIndex !== currentPageIndex) {
            setCurrentPageIndex(newPageIndex);
            setRerenderKey(Date.now()); // Update key for active component
        }
    };

    const handleNavigate = (index) => {
            setMenuOpen(false);
            containerRef.current.scrollTo({
                top: index * containerRef.current.offsetHeight,
                behavior: 'smooth',
            });
            setCurrentPageIndex(index);
            setRerenderKey(Date.now());
    };

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [currentPageIndex]);

    return (
        <div
            ref={containerRef}
            className="w-screen h-screen overflow-auto snap-y snap-mandatory scroll-smooth bg-[#0f0f0f]"
        >
            {/* Header */}
            <header
                className="sticky top-0 left-0 w-full bg-black text-white py-1 lg:py-4 z-10"
                style={{
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)',
                    backgroundColor: '#0f0f0f',
                }}
            >
                <nav className="flex justify-between items-center px-8">
                    <div className="text-xl font-bold text-blue-500">coleexz</div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="text-white focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-8">
                        {pages.map((page, index) => (
                            <li
                                key={page.id}
                                className={`cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300 ${
                                    currentPageIndex === index ? 'text-blue-500' : ''
                                }`}
                                onClick={() => handleNavigate(index)}
                            >
                                {page.name}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <ul className="lg:hidden bg-black text-gray-300 py-4">
                        {pages.map((page, index) => (
                            <li
                                key={page.id}
                                className="py-2 px-4 cursor-pointer hover:text-blue-500"
                                onClick={() => handleNavigate(index)}
                            >
                                {page.name}
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            {/* Page Container */}
            <div>
                {pages.map((page, index) => (
                    <div
                        key={page.id}
                        id={`page-${page.id}`}
                        className={`snap-start w-full h-screen flex items-center justify-center transition-opacity duration-500 ${
                            currentPageIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    >
                        {/* Re-render active component using dynamic key */}
                        {currentPageIndex === index && React.cloneElement(page.component, { key: rerenderKey })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

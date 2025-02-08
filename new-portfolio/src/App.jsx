import React, { useState } from 'react';

// Import your page components
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Work from './components/Work/Work.jsx';
import Skills from './components/Skills/Skills.jsx';
import ContactMe from './components/Contact Me/ContactMe.jsx';

const App = () => {
    const pages = [
        { id: 0, name: 'Home', component: <Home /> },
        { id: 1, name: 'About', component: <About /> },
        { id: 2, name: 'Skills', component: <Skills /> },
        { id: 3, name: 'Work', component: <Work /> },
        { id: 4, name: 'Contact', component: <ContactMe /> },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    // Smooth scroll to a section
    const handleNavigate = (id) => {
        const section = document.getElementById(`section-${id}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <div className="lg:w-full h-full overflow-x-hidden ">
            {/* Header */}
            <header
                className="bg-[#000000] fixed top-0 left-0 w-full text-white py-1 lg:py-4 z-50"
                style={{
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.5)',
                    backgroundColor: '#0f0f0f',
                }}
            >
                <nav className="flex justify-between items-center px-8">
                    <div className="text-xl font-bold text-gray-300">coleexz</div>
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
                        {pages.map((page) => (
                            <li
                                key={page.id}
                                className="cursor-pointer text-gray-300 hover:text-blue-500 transition duration-300"
                                onClick={() => handleNavigate(page.id)}
                            >
                                {page.name}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <ul className="lg:hidden bg-black text-gray-300 ">
                        {pages.map((page) => (
                            <li
                                key={page.id}
                                className="py-2 px-8 cursor-pointer hover:text-blue-500"
                                onClick={() => handleNavigate(page.id)}
                            >
                                {page.name}
                            </li>
                        ))}
                    </ul>
                )}
            </header>

            {/* Page Sections */}
            <div className="">
                {pages.map((page) => (
                    <div
                        key={page.id}
                        id={`section-${page.id}`}
                        className="w-full p-0"
                    >
                        {page.component}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

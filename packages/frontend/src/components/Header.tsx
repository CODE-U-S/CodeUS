// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-950 text-white p-4 flex justify-between items-center w-full">
            <div className="flex items-center">
                <img src="/codeus.svg" alt="CodeUS Logo" className="h-10 w-10 mr-3" />
                <h1 className="text-xl font-bold">CodeUS</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#services" className="hover:underline">Services</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-950 text-white p-4 text-center w-full">
            <p>&copy; 2024 CodeUS. All rights reserved.</p>
            <nav>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;

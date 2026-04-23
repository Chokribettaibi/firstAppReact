import React from 'react';
import './style.css';
const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My React App</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
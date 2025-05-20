import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';

const home = () => {
    const languages = [
        { name: "HTML", desc: "Structure web content." },
        { name: "JavaScript", desc: "Add interactivity to web." },
        { name: "Python", desc: "Versatile and powerful." },
        { name: "Java", desc: "Enterprise-level applications." },
        { name: "C", desc: "Systems programming." },
        { name: "C++", desc: "Performance-critical apps." },
        { name: "Bash", desc: "Command-line scripting." },
    ];
    return (
        <div className='bg-[#181818] h-screen relative overflow-hidden'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default home
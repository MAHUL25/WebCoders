import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Monitors from '../components/monitors';

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
        <div className='bg-[#181818] min-h-screen relative overflow-x-hidden overflow-y-auto no-scrollbar'>
            <Navbar />
            <Hero />
            <Monitors />
        </div>
    )
}

export default home
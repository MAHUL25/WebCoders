import React from 'react'
import { FaGithub, FaCode } from "react-icons/fa"
import { GiFoxHead } from "react-icons/gi"
import { BsMicrosoft } from "react-icons/bs";
import { SiAdobe } from "react-icons/si";

const hero = () => {
  return (
    <div className='min-h-screen relative overflow-hidden text-white'>
        <div className='max-w-screen mx-auto pt-[30px] px-16 relative z-10 flex flex-row justify-between items-start gap-y-10'>
            <div className='text-[#AABCE6] font-bold text-[120px] leading-none space-y-4'>
                <div>Code.</div>
                <div>Editor.</div>
                <div>Deploy.</div>
            </div>
            <div className='max-w-[400px] space-y-4'>
                <div className='flex flex-col px-2 space-y-1'>
                    <h2 className='text-[23px] font-bold'>Upgrade your process</h2>
                    <p className='text-[#8e8b8b] text-[18px] font-normal'>Integrate code development processes to encorage collaboration and increase quality output.</p>
                </div>
                <div className='space-y-2 px-2'>
                    {['Documentation, Backup and Recovery', 'security & Performance optimization','Code Review and Quality Assurance'].map((item, index) => (
                        <div key={index} className='flex items-center space-x-4'>
                            <div className='w-4 h-4 bg-[#99dade] rounded-full' />
                            <span className='text-[18px] font-bold'>{item}</span>
                        </div>
                    ))}
                </div>
                <div className='mt-6 px-2'>
                    <button className='flex items-center bg-[#282828] text-xl font-bold cursor-pointer border border-white px-6 py-3 rounded-lg hover:bg-[#333333] transition'>
                        <FaGithub className='bg-[#99dade] text-black rounded-full text-3xl mr-3' />
                        Import Source Code
                    </button>
                </div>
            </div>
        </div>
        <div className='w-full text-center mt-30'>
            <p className='text-[#bdbdbd] text-xl font-bold tracking-[0.2em]'>TRUSTED BY COMPANY</p>
        </div>

        <div className='flex flex-wrap gap-x-10 gap-y-6 px-6 text-[#aaaaaa] items-center max-w-screen justify-center text-[20px] mt-4'>
            <div className='flex items-center space-x-2'>
                <span>Github</span>
                <FaGithub />
            </div>
            <div className='flex items-center space-x-2'>
                <span>CodeLap</span>
                <FaCode />
            </div>
            <div className='flex items-center space-x-2'>
                <span>FOX HUB</span>
                <GiFoxHead />
            </div>
            <div className='flex items-center space-x-2'>
                <span>Microsoft</span>
                <BsMicrosoft />
            </div>
            <div className='flex items-center space-x-2'>
                <span>Adobe</span>
                <SiAdobe />
            </div>
        </div>
    </div>
  )
}

export default hero
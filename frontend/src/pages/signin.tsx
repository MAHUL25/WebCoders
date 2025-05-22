import React from 'react';
import { FaGithub, FaGoogle, FaApple } from 'react-icons/fa';

const signin = () => {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col items-center justify-between py-12 px-4">
        <div className="mb-6">
            <img src="coder2.svg" alt="Logo" className="w-[90px] h-[90px]" />
        </div>

        <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Sign in to</h1>
            <h1 className="text-4xl md:text-5xl font-bold">WebCoders</h1>
            <p className="text-[#898989] text-lg md:text-xl max-w-xl mx-auto">
                Login or register to start building your projects today.
            </p>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10 w-full max-w-xl">
            <button className="w-full h-[70px] cursor-pointer bg-[#EDFFA6] rounded-xl flex items-center justify-center gap-4">
                <FaGithub className="w-6 h-6 md:w-[30px] md:h-[30px]" />
                <span className="text-black text-lg md:text-2xl font-medium">Sign in with GitHub</span>
            </button>

            <div className="flex flex-col md:flex-row gap-6 w-full">
                <button className="flex-1 h-[60px] cursor-pointer bg-[#292929] rounded-xl flex items-center justify-center gap-3">
                    <FaGoogle className="w-5 h-5 text-[#999999]" />
                    <span className="text-[#999999] text-md font-medium">Sign in with Google</span>
                </button>

                <button className="flex-1 h-[60px] cursor-pointer bg-[#292929] rounded-xl flex items-center justify-center gap-3">
                    <FaApple className="w-6 h-6 text-[#999999]" />
                    <span className="text-[#999999] text-md font-medium">Sign in with Apple</span>
                </button>
            </div>

            <div className="h-[50px] text-white flex justify-center w-[200px] mt-10">
                <a href="./signin-userEmail" className="text-white text-lg hover:underline hover:underline-offset-4 px-6 py-3 transition duration-200">
                    Sign in with SSO
                </a>
            </div>
        </div>

        <div className="text-center text-sm text-white mt-10">
            <p>
                By continuing you agree to WebCoders{' '}
                <span className="underline">Terms of Service</span> and{' '}
                <span className="underline">Privacy Policy</span>.
            </p>
        </div>
    </div>
  );
};

export default signin;
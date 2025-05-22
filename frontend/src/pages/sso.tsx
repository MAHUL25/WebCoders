import React from 'react'
import { FaGithub, FaGoogle, FaApple } from 'react-icons/fa';

const sso = () => {
  return (
    <div className="min-h-screen bg-[#181818] flex flex-col items-center justify-between py-12 px-4">
        <div className="mb-6">
            <img src="coder2.svg" alt="Logo" className="w-[90px] h-[90px]" />
        </div>

        <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Sign in with SSO</h1>
        </div>

        <div>
            <form className="w-full max-w-md space-y-6" method='POST'>
                <input type="email" placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-[#1e1e1e] text-white placeholder-[#999] border border-[#333] focus:border-purple-500 hover:border-purple-500 outline-none transition duration-200"
                />
                <button type="submit" className="w-full py-3 bg-[#edffa6] text-black text-lg rounded-md hover:bg-[#e6f786] transition duration-200">
                    Continue with SSO
                </button>
            </form>
        </div>

        <div className="h-[50px] text-white flex flex-row justify-center w-[250px] mt-30 py-3 px-6">
            <span className='text-white text-lg mr-2'>Not SSO?</span>
            <a href="/signin" className="text-white text-lg hover:underline hover:underline-offset-4 transition duration-200">
                Sign in
            </a>
        </div>

        <div className="text-center text-sm text-white mt-1">
            <p>
                By continuing you agree to WebCoders{' '}
                <span className="underline">Terms of Service</span> and{' '}
                <span className="underline">Privacy Policy</span>.
            </p>
        </div>
    </div>
  )
}

export default sso
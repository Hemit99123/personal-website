import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black w-full h-auto text-white px-8 sm:px-16 md:px-32 lg:px-52 xl:px-64 p-10 font-code flex flex-col lg:flex-row justify-between font-semibold">
        <div className="mb-6 lg:mb-0">
            <p>Hit me up:</p>
            <p className="hover:text-pink-500 cursor-pointer">➔ Twitter</p>
            <p className="hover:text-pink-500 cursor-pointer">➔ Email</p>
        </div>

        <div className="mb-6 lg:mb-0">
            <p>Fun Facts:</p>
            <div className="text-pink-500">
                <p>- i love Harry Potter</p>
                <p>- i&apos;m a gym rat</p>
                <p>- i love history + politics</p> 
            </div>
        </div>

        <div className="text-purple-500 text-center lg:text-left">
            Built with ❤️ by Hemit
        </div>
    </div>
  )
}

export default Footer

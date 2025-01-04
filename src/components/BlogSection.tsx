"use client"

import React from 'react'
import {useRouter} from "next/navigation"

const BlogSection = () => {

    const router = useRouter()

    const handleGoBlog = () => {
        router.push("https://hemitdev.wordpress.com/")
    }

  return (
    <div className="flex flex-col items-center my-20">
        <h2 className="text-blue-500 font-bold text-3xl">My SWE Blog</h2>
        <p className="text-gray-500">I am also into blogging new technologies and learnings I find!</p>
        <button 
            onClick={handleGoBlog} 
            className="bg-black text-white px-10 py-3 rounded-lg hover:bg-white hover:text-black duration-500 border-2 border-black mt-2"
        >
            Check it out 😪
        </button>
    </div>  
  )
}

export default BlogSection
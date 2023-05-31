import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='footer flex flex-col justify-center items-center card-footer m-1 p-1 text-sm hover:text-blue-600 hover:font-semibold transition duration-400 ease-in-out'>
        <p>
            <a className='flex items-center justify-center' href="https://github.com/Erik-Varga" target="_blank" rel="noreferrer">
                &copy; {(new Date().getFullYear())} Erik Varga | Web Developer 
                &nbsp; <AiFillGithub className='ml-1' />
            </a>
        </p>
        <p>
            <a className='flex items-center justify-center' href="https://github.com/Erik-Varga/react-vite-todo-app" target="_blank" rel="noreferrer">
        
            Source Code &nbsp;<BsCodeSlash />
            </a>
        </p>
    </div>
  )
}

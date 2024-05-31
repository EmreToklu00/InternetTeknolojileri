import React from 'react';
import ReactLogo from '../../assets/logo.svg'

const Footer = () => (
    <footer className="bg-white  shadow dark:bg-gray-900 mt-auto w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://react.dev/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={ReactLogo} className="h-8" alt="React Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">İnternet Teknolojileri</span>
                </a>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">İletişim</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="mailto:tokluemre00@gmail.com" className="hover:underline">Email</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://github.com/EmreToklu00" target="_blank"
                               className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/oemre58/" target="_blank"
                               className="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 "/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                Osman Emre Toklu. All Rights Reserved.
            </span>
        </div>
    </footer>
);

export default Footer;

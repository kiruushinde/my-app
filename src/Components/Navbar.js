// there are two types of components in react 
// 1. function based components
// 2. i'm not remembering that now..😅
// here we type 'rfc' to get the snippet for react function based componenets

import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="flex justify-between py-2 bg-gray-800 text-white w-full">
            <div className="flex items-center">
                <ul className="flex justify-self-auto">
                    <li>
                        <a className='px-3 text-xl cursor-pointer hover:text-white' href="">{props.title}</a>
                    </li>

                    <li>
                        <a className='px-3 text-lg cursor-pointer hover:text-white' href="/about">{props.aboutText}</a>
                    </li>

                    <li>
                        <a className='px-3 mt-0.5 text-md cursor-pointer hover:text-white' href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="mx-10 space-x-3">
                <input type="search" name="" id="" placeholder='search here' className='p-1 rounded-md px-2 text-black outline-none' />
                <button className='px-3 text-lg font-medium rounded-md bg-green-500'>
                    Search
                </button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Read title here",
    aboutText: "This is about"
}


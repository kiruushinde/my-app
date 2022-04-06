// this is our third component
// command --> rfc 
// this command will produce the code snippet which you can see below.


import React from 'react'

export default function About() {
    return (
        <div className='mt-48 mx-32 mb-10'>
            <h1 className='text-3xl font-medium underline'>About Us</h1>

            <details className='w-full mt-3 outline outline-slate-200 rounded-md p-2'>
                <summary className='text-xl font-medium'>
                    About our servies
                </summary>
                <div className='text-lg'>
                    <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae obcaecati illum error iusto id sunt! Tempore exercitationem veritatis ipsum nam necessitatibus optio architecto pariatur autem, ipsam debitis facilis praesentium?</p>
                </div>
            </details>
            <details className='w-full mt-3 outline outline-slate-200 rounded-md p-2'>
                <summary className='text-xl font-medium'>
                    About our customers
                </summary>
                <div className='text-lg'>
                    <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae obcaecati illum error iusto id sunt! Tempore exercitationem veritatis ipsum nam necessitatibus optio architecto pariatur autem, ipsam debitis facilis praesentium?</p>
                </div>
            </details>
            <details className='w-full mt-3 outline outline-slate-200 rounded-md p-2'>
                <summary className='text-xl font-medium'>
                    About our quality
                </summary>
                <div className='text-lg'>
                    <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae obcaecati illum error iusto id sunt! Tempore exercitationem veritatis ipsum nam necessitatibus optio architecto pariatur autem, ipsam debitis facilis praesentium?</p>
                </div>
            </details>
            <button type='button' className='text-sm px-4 m-2 bg-blue-500 text-white rounded-md font-bold py-1.5 mt-3 -mx-0.5'>Enable dark mode</button>
        </div>
    )
}

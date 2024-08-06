import React from 'react'
import './Portfolio.css'

function Portfolio() {
    return (
        <>
            <div className='flex justify-between bg-[#1F1F33] p-5 h-screen'>
                <nav className='flex '>
                <img src="https://soni-media.s3.amazonaws.com/wp-content/uploads/20170512180532/Respirator-icon-500x500px-v1.png" alt="aa" className='flex h-10 m-2' />
                        <li className='flex ml-10 mt-1'>
                        <a href="" className='m-3'>Início</a>
                        <a href="" className='m-3'>Sobre</a>
                        <a href="" className='m-3'>Habilidades</a>
                        <a href="" className='m-3'>Projetos</a>
                        </li>
                </nav>
                <button className='col-span-1 flex m-3 mr-10'>aa</button>
            </div>
            <div>
                <main></main>
            </div>
        </>
    )
}

export default Portfolio
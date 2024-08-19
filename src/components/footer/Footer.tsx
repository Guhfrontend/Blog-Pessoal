import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import './Footer.css'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-10'>
              <a href="https://www.linkedin.com/school/generationbrasil/posts/?feedView=all" target="_blank" rel="linkedin"><LinkedinLogo size={48} weight='bold' id='logo' /></a>
              <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="instaram"><InstagramLogo size={48} weight='bold' id='logo' /></a>
              <a href="https://www.facebook.com/generationbrasil/" target="_blank" rel="facebook"><FacebookLogo size={48} weight='bold' id='logo' /></a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
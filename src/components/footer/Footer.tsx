import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import './Footer.css'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-10'>
              <LinkedinLogo size={48} weight='bold' id='logo' />
              <InstagramLogo size={48} weight='bold' id='logo' />
              <FacebookLogo size={48} weight='bold' id='logo' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
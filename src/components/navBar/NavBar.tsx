import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import './NavBar.css'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' id='navbar-logo' className='text-2xl font-bold uppercase'>HIPSTERS BLOG</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:text-indigo-500 transition ease-in-out font-bold'>Postagens</Link>
              <Link to='/temas' className='hover:text-indigo-500 transition ease-in-out font-bold'>Temas</Link>
              <Link to='/cadastroTema' className='hover:text-indigo-500 transition ease-in-out font-bold'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:text-indigo-500 transition ease-in-out font-bold'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:text-indigo-500 transition ease-in-out font-bold'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar
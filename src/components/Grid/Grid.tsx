import React from 'react'

function Grid() {
  return (
    <div className='grid grid-cols-12'>

      <div className='col-span-1 bg-red-300 h-screen '>
        Servidores
      </div>
      <div className='col-span-3 bg-red-400 h-screen '>
        Canais
      </div>
      <div className='col-span-6 bg-red-100 h-screen '>
        Feed
      </div>
      <div className='col-span-2 bg-red-300 h-screen '>
        Participantes
      </div>

    </div>
  )
}

export default Grid
import React from 'react'

function Flex() {
    return (
        <div className='border-4 border-red-600 m-8 p-8 flex items-center justify-between'>
            <div className='w-[250px]'>
                <h1 className='text-2xl'>Scarlet Witch</h1>
                <p>Mais poderosa que o Mago Supremo</p>
                
            </div>
            <div className='w-[250px]'>
                <img src="https://img.odcdn.com.br/wp-content/uploads/2024/07/imagem_2024-07-26_100618145.png" alt="feiticeira escarlate" />
            </div>
        </div>
    )
}

export default Flex

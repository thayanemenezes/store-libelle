import Image from 'next/image'
import React from 'react'

const categorias = [
    {id: 1, nome: 'Tênis', image: 'https://firebasestorage.googleapis.com/v0/b/loja-libelle.appspot.com/o/tênis-sneakers.jpeg?alt=media&token=0710a8b8-6b4a-4237-8e61-c347b4a8e269'},
    {id: 2, nome: 'Sandálias', image: 'https://firebasestorage.googleapis.com/v0/b/loja-libelle.appspot.com/o/vizzano-sandália.jpeg?alt=media&token=238bdd31-8fcd-457a-abce-3727204f6045'},
    {id: 5, nome: 'Botas', image: 'https://firebasestorage.googleapis.com/v0/b/loja-libelle.appspot.com/o/bota-coturno-preta.jpeg?alt=media&token=52637345-ad32-42db-80a8-eb090cdbbecc'}
]

export default function Categorias() {
  return (
    <div className='flex gap-6 w-full justify-center'>
        {categorias.map((value, index) => {
            return(
                <div key={index} className='flex flex-col items-center rounded-full'>
                    <Image className='rounded-full' src={value.image} alt='categoria imagem' width={90} height={0}/>
                    <h4 className='text-pink-900 mt-2'>{value.nome}</h4>
                </div>
            )
        })}
    </div>
  )
}

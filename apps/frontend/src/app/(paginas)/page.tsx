
import Categorias from '@/components/produto/Categorias'
import ListaProdutos from '@/components/produto/ListaProdutos'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className='w-full mt-20'>
                <Image src={'/banner-libelle.jpg'} alt='banner' width={1500} height={0}/>
            </div>
        <div className="flex-1 flex flex-col container gap-5 py-10"> 
        <Categorias />
        <h1 className='text-pink-900 mt-10 mb-5 font-semibold text-2xl text-center'>✌🏽 Novidades da semana</h1>
            <ListaProdutos />
        </div>
        </div>
    )
}

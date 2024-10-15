'use client'
import { IconSearch } from '@tabler/icons-react'
import useProdutos from '@/data/hooks/useProdutos'

export interface FiltroProdutoProps {
    className?: string
}

export default function FiltroProduto(props: FiltroProdutoProps) {
    const { pesquisa, setPesquisa } = useProdutos()
    return (
        <div className='w-0 ml-6 lg:w-full'>
            <div
                className={` 
                    flex gap-2 bg-gray-200
                    rounded-full overflow-hidden ${props.className ?? ''}
                `}
            >
                <input
                    value={pesquisa ?? ''}
                    onChange={(e) => setPesquisa(e.target.value)}
                    placeholder="O que você procura?"
                    className="flex-1 bg-transparent outline-none px-6 py-3 placeholder-pink-900"
                />
                <div className="flex justify-center items-center px-4">
                    <IconSearch size={24} className="text-pink-900/60" />
                </div>
            </div>
        </div>
    )
}

'use client'
import Logo from '../shared/Logo'
import IconeCarrinho from '../shared/IconeCarrinho'
import Link from 'next/link'
import useCarrinho from '@/data/hooks/useCarrinho'
import FiltroProduto from '../produto/FiltroProduto'

export default function Cabecalho() {
    const { qtdeItens } = useCarrinho()
    return (
        <div
            className="flex flex-col w-full pt-4 fixed bg-white z-20" >
            <div className="flex-1 container flex flex-col justify-center pb-4">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-row items-center w-8/12">
                    <Logo />
                    <FiltroProduto />
                    </div>
                    <Link href="/checkout/carrinho">
                        <IconeCarrinho qtdeItens={qtdeItens} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

import { IconShoppingCart } from '@tabler/icons-react'
import { Moeda } from '@gstore/core'
import Link from 'next/link'

export interface TotalCarrinhoProps {
    qtdeItens: number
    valorTotal: number
}

export default function TotalCarrinho(props: TotalCarrinhoProps) {
    return (
        <div className="flex justify-end items-center gap-7      h-24 rounded-xl px-7">
            <div className="flex flex-col">
                <span className="text-zinc-400">
                    Total ({props.qtdeItens}{' '}
                    {props.qtdeItens === 1 ? 'item' : 'itens'}):
                </span>
                <span className="text-pink-900 text-2xl font-semibold">
                    {Moeda.formatar(props.valorTotal ?? 0)}
                </span>
            </div>
            <Link href="/checkout/pagamento" className="button bg-green-700">
                <IconShoppingCart size={20} />
                <span>Continuar</span>
            </Link>
        </div>
    )
}

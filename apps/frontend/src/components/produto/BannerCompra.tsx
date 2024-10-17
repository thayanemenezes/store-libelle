'use client'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Moeda, Produto } from '@gstore/core'
import { useRouter } from 'next/navigation'
import useCarrinho from '@/data/hooks/useCarrinho'
import useParcelamento from '@/data/hooks/useParcelamento'

export interface BannerCompraProps {
    produto: Produto
}

export default function BannerCompra(props: BannerCompraProps) {
    const router = useRouter()
    const { produto } = props
    const { adicionarItem } = useCarrinho()
    const parcelamento = useParcelamento(produto.precoPromocional)

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col border-rpr-5 my-10">
                <div className="line-through text-zinc-400">{Moeda.formatar(produto?.precoBase)}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-emerald-500">{Moeda.formatar(produto?.precoPromocional)}</span>{' '}
   
                </div>
                <span className="text-base text-zinc-300">{parcelamento.qtdeParcelas}x de {Moeda.formatar(parcelamento.valorParcela)}</span>
            </div>
            <div className="flex flex-col gap-4 items-start w-full">
                <button
                    className="button w-10/12 m-auto bg-pink-600"
                    onClick={() => adicionarItem(produto)}
                >
                    <IconShoppingCart size={20} />
                    <span>Adicionar</span>
                </button>
                <button
                    className="button w-10/12 m-auto bg-violet-700"
                    onClick={() => {
                        adicionarItem(produto)
                        router.push('/checkout/pagamento')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}

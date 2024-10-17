import { Produto } from '@gstore/core'

export interface TituloProdutoProps {
    produto: Produto
}

export default function TituloProduto(props: TituloProdutoProps) {
    const { produto } = props
    return (
        <div className="flex flex-col">
            <div className="text-2xl text-pink-950">{produto?.marca}</div>
            <div className="font-light text-pink-950">{produto?.descricao}</div>
        </div>
    )
}

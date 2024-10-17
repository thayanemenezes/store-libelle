'use client'

import InformacoesProduto from '@/components/produto/InformacoesProduto'
import ProdutoNaoEncontrado from '@/components/produto/ProdutoNaoEncontrado'
import useProdutos from '@/data/hooks/useProdutos'


export default function PaginaProduto(props: any) {
    const id = +props.params.id
    const { produtos } = useProdutos()
    const produto = produtos.find((produto) => produto.id === id)

    return produto ? (
        <div className="flex flex-col gap-20 container py-10 mt-20">
            <div className="flex flex-col gap-10">
                <InformacoesProduto produto={produto} />
                <div className='flex flex-col'>
                <span className="py-4 bg-white/5 rounded text-pink-900">{produto.descricao}</span>
                {produto?.especificacoes &&
                Object.keys(produto.especificacoes)
                    .filter((k) => k !== 'destaque')
                    .map((chave) => (
                       
                        <div key={chave} className="flex text-pink-900 ">
                            <span className="py-1 w-1/3 bg-white/5 rounded font-bold">{chave}</span>
                            <span className="py-1 w-2/3 bg-white/5 rounded">
                                {produto.especificacoes[chave]}
                            </span>
                        </div>
                       
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}

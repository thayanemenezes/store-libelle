import { Produto } from '@gstore/core'
import Image from 'next/image'
import Especificacoes from './Especificacoes'

export interface InformacoesProdutoProps {
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props
    return produto ? (
        <div className="flex items-centerrounded-xl p-5">
            <div className="flex-1 relative flex h-96">
                <Image
                    src={produto.imagem!}
                    fill
                    className="object-contain"
                    alt="Imagem do Produto"
                />
               
            </div>
            
            <Especificacoes produto={produto!} />
        </div>
    ) : null
}

import { Produto } from '@gstore/core'
import NotaReview from '../shared/NotaReview'

export interface AvaliacoesUsuariosProps {
    produto: Produto
}

export default function AvaliacoesUsuarios(props: AvaliacoesUsuariosProps) {
    return (
        <div className="flex flex-col gap-2">
         <NotaReview nota={props.produto.nota} tamanho={18} />
        </div>
    )
}

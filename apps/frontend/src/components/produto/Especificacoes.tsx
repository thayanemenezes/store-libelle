
import { Produto } from '@gstore/core'
import TituloProduto from './TituloProduto'
import AvaliacoesUsuarios from './AvaliacoesUsuarios'
import BannerCompra from './BannerCompra'


export interface EspecificacoesProps {
    produto: Produto
}

export default function Especificacoes(props: EspecificacoesProps) {
    const { produto } = props
    return produto ? (
        <div className="flex-1 flex flex-col gap-1 h-full">
          <TituloProduto produto={produto} />
          <AvaliacoesUsuarios produto={produto} />
          <BannerCompra produto={produto} />
        </div>
    ) : null
}

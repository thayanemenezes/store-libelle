import Image from 'next/image'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

export interface PaginaProps {
    children: any
    className?: string
    semCabecalho?: boolean
    semRodape?: boolean
}

export default function Pagina(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen overflow-hidden">
            <div
                className="flex-1 flex flex-col w-screen"
            >
                {!props.semCabecalho && <Cabecalho />}
                
                <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>
                    {props.children}
                </main>
                {!props.semRodape && <Rodape />}
            </div>
        </div>
    )
}

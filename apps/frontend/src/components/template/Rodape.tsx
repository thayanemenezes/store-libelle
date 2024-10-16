import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
} from '@tabler/icons-react'
import Logo from '../shared/Logo'

export default function Rodape() {
    return (
        <footer className="flex flex-col  text-pink-900 mt-10">
            <div className="h-px bg-gradient-to-r from-pink-600/20 via-pink-600/80 to-pink-600/20 mb-5"/>
            <div className="container flex flex-col py-10 gap-14">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <div className='w-48'>
                    <Logo/>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-pink-900 pb-2">Sobre</span>
                        <span className="text-sm">Nossa História</span>
                        <span className="text-sm">Política de Privacidade</span>
                        <span className="text-sm">Termos de Uso</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-pink-900 pb-2">Contato</span>
                        <span className="text-sm">loja.libelle@gmail.com</span>
                        <span className="text-sm">+55 85 99283-3518</span>
                    </div>
                    <div className="flex gap-1 ">
                        <IconBrandYoutube size={28} stroke={1} />
                        <IconBrandInstagram size={28} stroke={1} />
                        <IconBrandFacebook size={28} stroke={1} />
                        {/* <IconBrandLinkedin size={28} stroke={1} /> */}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-zinc-500 m-auto mt-5">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>❤️</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                </div>
            </div>
        </footer>
    )
}

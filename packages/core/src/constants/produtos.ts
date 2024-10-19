import { Produto } from '../produto'

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Tênis Plataforma Ramarim',
        descricao:
            'Tênis Plataforma Ramarim',
        marca: 'Ramarim',
        modelo: 'Plataforma',
        imagem: 'https://firebasestorage.googleapis.com/v0/b/loja-libelle.appspot.com/o/tenis-plataforma-ramarim.jpeg?alt=media&token=28e6eabc-6058-4b00-801b-fcc5e8cfdb66',
        nota: 4.5,
        videoReview: '',
        tags: ['Baixou'],
        precoBase: 149.9,
        precoPromocional: 139.9,
        menorPreco: 139.9,
        maiorPreco: 149.9,
        precoMedio: 139.9,
        especificacoes: {
            destaque: 'Tênis Plataforma Ramarim',
            cor:"Branco com dourado",
            material:"Sintético",
            tamanhos: ["34","35","36","37","38"]
        },
    },
]

export default produtos

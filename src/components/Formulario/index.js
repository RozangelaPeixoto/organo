import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    const [projeto, setProjeto] = useState('')
    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            projeto,
            nome,
            imagem,
            time
        })
        setProjeto('')
        setNome('')
        setImagem('')
        setTime('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o colaborador</h2>
                <ListaSuspensa
                    obrigatorio={true} 
                    label= "Projeto" 
                    itens={props.projetos}
                    valor = {projeto}
                    aoAlterado = {valor => setProjeto(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                    tipo="text"
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite seu usuário do Github"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                    tipo="text"
                />
                <ListaSuspensa
                    obrigatorio={true} 
                    label= "Time" 
                    itens={props.times}
                    valor = {time}
                    aoAlterado = {valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario
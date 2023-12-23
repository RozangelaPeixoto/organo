import { useState } from "react"
import "./Projeto.css"
import CampoTexto from "../CampoTexto"
import Botao from "../Botao"


const Projeto = (props) => {
    const [projeto, setProjeto] = useState('')
    const [corProjeto, setCorProjeto] = useState('#000000')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoProjetoCadastrado({
            projeto,
            corProjeto
        })
        setProjeto('')
        setCorProjeto('#000000')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o projeto</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome do projeto" 
                    placeholder="Digite o nome do projeto"
                    valor = {projeto}
                    aoAlterado = {valor => setProjeto(valor)}
                    tipo="text"
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cor do projeto" 
                    placeholder=""
                    valor = {corProjeto}
                    aoAlterado = {valor => setCorProjeto(valor)}
                    tipo="color"
                />
                <Botao>Criar projeto</Botao>
            </form>
        </section>
    )
}

export default Projeto
import './Rodape.css'

const Rodape = () => {

    return (
        <section className='rodape-pagina'>
            <ul className='redes-sociais'>
                <li><a href="https://www.facebook.com/"><img src="/imagens/fb.png" alt="Logo do Facebook"/></a></li>
                <li><a href="https://twitter.com/"><img src="/imagens/tw.png" alt="Logo do Twitter"/></a></li>
                <li><a href="https://www.instagram.com/"><img src="/imagens/ig.png" alt="Logo do Instagram"/></a></li>
            </ul>
            <img src="/imagens/logo.png" alt="Logo do Organo"/>
            <p>Desenvolvido pela Alura</p>
        </section>
    )

}

export default Rodape
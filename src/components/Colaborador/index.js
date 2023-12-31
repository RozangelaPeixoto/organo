import "./Colaborador.css"

const Colaborador = ({time, nome, imagem, cor}) => {
    const imagemUsuario = imagem.includes('http') ? imagem : `https://github.com/${imagem}.png` 
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: cor[0].corTime}}>
                <img src={imagemUsuario} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{time}</h5>
            </div>
        </div>
    )

}

export default Colaborador
import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = {
        backgroundColor: props.corProjeto
    }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.projeto + " - " + colaborador.nome + " - " + colaborador.time} time={colaborador.time} nome={colaborador.nome} imagem={colaborador.imagem} cor={props.corTimes.filter(time => time.nome == colaborador.time)}/>)} 
            </div>
        </section>
    )
}

export default Time
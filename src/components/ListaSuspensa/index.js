import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.obrigatorio} value={props.valor}>
                {props.itens.length == 0 && props.label === "Projeto" ? <option value="">Cadastre um projeto</option> : <option value=""></option>}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import Projeto from './components/Projeto';

function App() {
  const times = [
    {
      nome: "Programação",
      corTime: "#57C278",
    },
    {
      nome: "Front-End",
      corTime: "#82CFFA"
    },
    {
      nome: "Data Science",
      corTime: "#A6D157"
    },
    {
      nome: "Devops",
      corTime: "#E06B69"
    },
    {
      nome: "UX e Design",
      corTime: "#DB6EBF"
    },
    {
      nome: "Mobile",
      corTime: "#FFBA05"
    },
    {
      nome: "Inovação e Gestão",
      corTime: "#FF8A29"
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  const [projetos, setProjetos] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const aoNovoProjetoAdicionado= (projeto) => {
    setProjetos([...projetos, projeto])
  }

  return (
    <div className='App'>
      <Banner/>
      <Projeto aoProjetoCadastrado={projeto => aoNovoProjetoAdicionado(projeto)}/>
      <Formulario times={times.map(time => time.nome)} projetos={projetos.map(projeto => projeto.projeto)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {projetos.length > 0 &&
        projetos.map(projeto => 
        <Time 
          key={projeto.projeto} 
          nome={projeto.projeto} 
          corProjeto={projeto.corProjeto}
          corTimes={times}
          colaboradores={colaboradores.filter(colaborador => colaborador.projeto == projeto.projeto)}
        />)
      }
      <Rodape/>
   </div>
  );
}

export default App;

import './Tema.scss';
import { useState } from 'react';

export default function App() {
  const [tela, setTela] = useState("Claro");

  function mudarTema(){

    if(tela === "Claro"){
      setTela("Escuro")
    } else {
      setTela("Claro")
    }
  }
  return(
    <div className={`Div ${tela}`}>
      <h1>Troca de Tema</h1>
      <button onClick={mudarTema}>Mudar o tema</button>
      <p>Tema atual: {tela}</p>
    </div>
  );
}
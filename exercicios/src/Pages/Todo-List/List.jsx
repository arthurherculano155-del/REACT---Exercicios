import './List.scss';
import { useState } from 'react';

export default function PostarLicao() {
    const [lista, setLista] = useState([]);

    function Postar(e) {
        let agora = new Date();

        let hora = agora.toLocaleString("pt-br", {
            hour: "2-digit",
            minute: "2-digit"
        });

        let valor = e.target.value;

        if (e.key === "Enter" && valor.trim() !== "") {
            setLista((listaAnterior) => [
                ...listaAnterior,
                {
                    valor,
                    hora
                }
            ]);

            e.target.value = "";
        }
    }

    return (
        <div className="lista-page">

            <div className="lista-container">

                <div className="lista-esquerda">
                    <h1>Minhas tarefas</h1>

                    <div className="lista-itens">
                        {lista.map((listinha, index) => (
                            <div className="lista-card" key={index}>

                                <div className="lista-numero">
                                    {index + 1}
                                </div>

                                <div className="lista-info">
                                    <h2>{listinha.valor}</h2>
                                    <p>{listinha.hora}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className="lista-direita">

                    <h1>Adicionar tarefa</h1>

                    <input
                        type="text"
                        onKeyDown={Postar}
                        placeholder="Digite uma tarefa..."
                    />

                    <p>
                        Pressione Enter para adicionar
                    </p>

                </div>

            </div>

        </div>
    );
}
import './getFilme.scss';
import { useState } from 'react';

export default function Filmes() {

    const [filme, setFilmes] = useState([]);
    const [id, setId] = useState("");

    async function retornarFilme() {

        let url = `http://localhost:7800/filmes/listar/${id}`;

        let resposta = await fetch(url);

        let json = await resposta.json();

        console.log(json);

        setFilmes(json.listinha);

        setId("");
    }

    function verificarEnter(e) {
        if (e.key === "Enter") {
            retornarFilme();
        }
    }

    return (
        <div className="filmes-page">

            <h1>Buscar Filme</h1>

            <div className="busca-filme">

                <input
                    type="number"
                    placeholder="Digite o ID..."
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    onKeyDown={verificarEnter}
                />

                <button onClick={retornarFilme}>
                    Buscar
                </button>

            </div>

            <div className="lista-filmes">

                {filme.map((filminho) => (

                    <div
                        className="filme-card"
                        key={filminho.id}
                    >

                        <h1>{filminho.nome}</h1>

                        <p>{filminho.sinopse}</p>

                        <p>
                            Disponível: {filminho.disponivel ? "Sim" : "Não"}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}
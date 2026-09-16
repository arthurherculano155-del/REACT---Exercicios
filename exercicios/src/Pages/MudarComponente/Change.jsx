import "./Change.scss";
import { useState } from "react";

export default function Mudar(){
    const [change, setChange] = useState(0);

    function Mudando(e){
        let qtd = e.target.value;
        let quantidade = qtd.length;

        setChange(quantidade)
    }
    return(
        <div className="Legal">
            <h1>Limite de Carácteres</h1>
            <input type="text" onChange={Mudando} maxLength={100} />
            <p>{change} / 100</p>

            {change === 100 && (
                <p>Limite Alcançado!</p>
            )}
        </div>
    );
}
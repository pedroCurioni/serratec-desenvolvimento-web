import React, { useState } from "react";

export const RendereizacaoCondicional = () => {
    const [isLogado, setIsLogado] = useState(false);

    function SaudacaoUsuario() {
        return <h1>Bem-Vindo de Volta!</h1>;
    }

    function SaudacaoVisitante() {
        return <h1>Por favor, registre-se</h1>;
    }

    function logar() {
        setIsLogado(true)
    }

    function validarLoginLogoff(props) {
        if (props) {
            return <SaudacaoUsuario />;
        } else {
            return <SaudacaoVisitante />;
        }
    }

    return (
        <div>
            {validarLoginLogoff(isLogado)}
            <button onClick={() => logar()}>{isLogado ? "Logoff" : "Login"}</button>
        </div>
    );
};

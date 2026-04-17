interface TeamMemberProps {
    nome: string;
    cargo: string;
    descricao: string;
    cor: string; 
}

function pegarInicial(nome:string): string{
    const partes = nome.trim().split(" ");

    if (partes.length === 1){
        return partes[0][0].toUpperCase();
    }

    return (partes[0][0] + partes[partes.length -1][0]).toUpperCase();
}


export default function TeamMember ({nome, cargo, descricao, cor}: TeamMemberProps) {
    return(
        <div className="team-container">
            <div className="avatar"
            style={{ backgroundColor: cor || "#0033ffff" }}>{pegarInicial(nome)}</div>
            <div className="title-container">
                <h3>{nome}</h3>
                <h4>{cargo}</h4>
                <p>{descricao}</p>
            </div>
        </div>
    )
}
import { equipe } from "../../data/equipe";
import TeamMember from "./components/Team";
import './WhoWeAre.css'

export default function WhoWeAre(){
    return (
        <section className="whoweare">
            <div className="container-whoweare">
                <div className="title">
                    <h2>Quem está por trás da LipexTrack</h2>
                </div>
                <div className="team-list">
                {equipe.map((membros) => (
                    <TeamMember
                    key={membros.id}
                    nome={membros.nome}
                    cargo={membros.cargo}
                    descricao={membros.descricao}
                    cor={membros.cor}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}
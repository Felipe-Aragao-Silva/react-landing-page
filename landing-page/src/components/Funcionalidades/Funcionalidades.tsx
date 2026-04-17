import { funcionalidades } from "../../data/funcionalidades";
import CardFuncionalidades from "./components/Cards";
import './Funcionalidades.css';

export default function Funcionalidades() {
    return (
        <section className="funcionalidades">
            <div className="container-funcionalidades">
                <div className="titles">
                    <h2>Por que escolher a LipexTrack?</h2>
                    <p>Soluções completas desenhadas para o ecossistema de educação técnica
                        profissionalizante.</p>
                </div>

                <div className="lista-funcionalidades">
                    {funcionalidades.map((funcionalidade) => (
                        <CardFuncionalidades
                            key={funcionalidade.id}
                            icon={funcionalidade.icon}
                            title={funcionalidade.title}
                            description={funcionalidade.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
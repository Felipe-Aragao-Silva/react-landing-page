interface CardFuncionalidadesProps {
    icon:string;
    title : string;
    description: string;
}

 function CardFuncionalidades({icon, title, description} :CardFuncionalidadesProps) {
    return(
        <div className="card-funcionalidades">
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
 }

 export default CardFuncionalidades;
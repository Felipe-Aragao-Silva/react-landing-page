interface ItemPilarProps {
    icon: string;
    title: string;
    description: string;
}

function ItemPilar({icon, title, description} : ItemPilarProps) {
    return (
        <div className="item-pilar">
            <div>
                <img src={icon} />
            </div>
            <span className="title">{title}</span>
            <p>{description}</p>
        </div>
    );
}

export default ItemPilar;
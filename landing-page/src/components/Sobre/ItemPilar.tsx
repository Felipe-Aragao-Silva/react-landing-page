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
            <div>
                <span className="title-pilar">{title}</span>
                <p className="description-pilar">{description}</p>
            </div>
        </div>
    );
}

export default ItemPilar;
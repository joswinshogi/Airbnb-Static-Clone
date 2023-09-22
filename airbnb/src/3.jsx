function Card(props){
    let badgeText
    if(props.openSports === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.location=="Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--image"></img>
            <div className="card--stats">
                <img src="star.png" className="card--stars"></img>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
export default Card
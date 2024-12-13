const Menu= (props)=> {
    let path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/";
    console.log
   const {name,imageId,category,price}= props.items.card.info;
   const rating=props.items.card.info.ratings.aggregatedRating.rating
    return (
        <div className="menus">
            <div className="mina">

            <div className="menudes">
             <h2> {name} </h2>
             <h3> {rating} </h3>
          <h4>{price}</h4>
          <p> {category} </p>
            </div>
            <div className="menuimage">
            <img  alt="item" src={path+imageId}/>
            </div>
            </div>
           

        </div>
    )
}

export default Menu;
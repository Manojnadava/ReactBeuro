const styleCard={
    backgroundColor:"grey"
}

export const CardItems=(prop)=>{
   // console.log(prop);

    ///console.log(JSON.stringify(prop[2].card, null, 2));
   if ( prop.item.info.cloudinaryImageId ==undefined){
    prop.item.info.cloudinaryImageId='';
    }
   const  {name,cuisines,avgRating,costForTwoMessage,cloudinaryImageId}= prop.item.info;

   if(prop.item.info.cloudinaryImageId==''){
     path="https://c8.alamy.com/comp/2HBWP1Y/popular-india-food-mughlai-biryani-in-the-restaurant-2HBWP1Y.jpg";
   }
   else{
     path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/"
   }

  return(
    <div className="item" style={styleCard}>
        <img className="itemimage" alt="item" src={path+cloudinaryImageId}/>
        <h3> {name}</h3>
        <h4> {costForTwoMessage}</h4>
        <h4> {cuisines.join(',')}</h4>
        
        <h4> {avgRating}</h4>
 </div>
  )
}


module.exports= CardItems;
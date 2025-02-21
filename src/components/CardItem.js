const styleCard={
    backgroundColor:"grey"
}
let path;

export const CardItems=(prop)=>{  //this cardItem is one react componet in form of func
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
    <div className="p-2 m-5 w-[300px] h-auto rounded-xl bg-gray-50 hover:bg-gray-400 overflow-hidden" data-testid='resCard' >
        <img className="rounded-lg w-full h-64 py-3 object-cover " alt="item" src={path+cloudinaryImageId}/>
        <h3 className="text-lg font-bold py-3 break-words"> {name}</h3>
        <h4 className="break-words"> {costForTwoMessage}</h4>
        <h4 className="break-words"> {cuisines.join(',')}</h4>
        
        <h4> {avgRating}</h4>
 </div>
  )
}
 
export const productLabel= (CardItems)=>{
 return (props)=>{
  console.log(props);
  return(
    <div>
      <label>Promted</label>
      <CardItems {...props} />
    </div>
    
  )
  
 }
}

//module.exports= CardItems;
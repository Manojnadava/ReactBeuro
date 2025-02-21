import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../util/cartSlice";
 const Menu= (props)=> {
    const dispatch= useDispatch();

    const handleItem=(item)=>{
        //here we rae dispatching an action or triggering an action using action creator through which it will hit reducer
       (props.content==='add') ? dispatch(addItem(item)) : dispatch(removeItem(item));
    }
    let path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/";
    console.log
   const {name,imageId,category,price}= props.items.card.info;
   const rating=props.items.card.info.ratings.aggregatedRating.rating
    return (
        <div  data-testid='menus' className="flex items-center justify-center bg-gray-300 m-10 h-auto w-10/12  border-b border-gray-300">
           
            <div className="w-2/3 p-4">
             <h2 className="text-gray-600 font-bold"> {name} </h2>
             <h3 className="text-gray-600 font-bold"> {rating} </h3>
          <h4 className="text-gray-600 font-bold">{price}</h4>
          <p className="text-gray-600 font-bold"> {category} </p>
            </div>
           <div className="w-1/3 relative flex ">
            <img className="w-full rounded-lg shadow-sm" alt="item" src={path+imageId}/>
            <button onClick={()=>{handleItem(props.items)}} className="absolute top-2 right-10 left-10 bg-blue-500 text-white">{props.content}</button>

            </div>
           
           
           

        </div>
    )
}

export default Menu;
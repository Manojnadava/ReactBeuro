import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../util/useRestaurantmenu";
import AccordItem from "./Accord";
let status=null;
//named import
const RestaurantMenu = (props)=>{
    console.log('yu')
    const [resdata,menudata,accordata]=  useRestaurantmenu()
    const [showItem,setshowItem]=useState(null)
    const handleClick=(index)=>{
        if (status !=null) {
            (status===index ? setshowItem(null) :setshowItem(index) )
            status=null;
            return
        }
        setshowItem(index);
        status=index;
    }
  //  console.log(headerdata.name)
   // console.log(menudata);
    return (resdata.length==0)? <Shimmer/> :
    (  
        <div className="w-full">
            <div className=" border-spacing-3 bg-blue-500 border-solid m-3 shadow rounded-md m-5">
            <h1 className="text-center text-cyan-200 p-2 font-bold">{resdata.name}</h1>
            <h2 className="text-center text-cyan-200 p-2"> {resdata.locality}</h2>
            </div>
            <div >
            {accordata.map((item,index)=> {

                 return (
                        <AccordItem key={index} items={item.card.card} onclick={()=>handleClick(index)} isOpen={(showItem===index ? true : false) } /> 
                
                )
               }
            )}
            </div>
             
        </div>
    )
}

 export default RestaurantMenu;
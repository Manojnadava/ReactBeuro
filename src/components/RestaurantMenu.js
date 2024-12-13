import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import Menu from "./Menu";
import { useParams } from "react-router-dom";
let headerdata={};
let menudata=[];
//named import
const RestaurantMenu = (props)=>{
    [resdata, setresData]=useState([]);
    [key, setKey]=useState('');
    const {resid} =useParams();

    useEffect(()=>{
     fetchData();
    },[]) //dependecy array once means ueeffect calls once when component renders and useeffect takes call abck func tion and dependency array 

    const fetchData= async ()=>{
         const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8579593&lng=74.8404784&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
         const response= await data.json();
          headerdata= response.data.cards[2].card.card.info;
          menudata=response.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
         console.log(headerdata);
          console.log(menudata);
          setresData(headerdata);
         return
    }
    console.log(headerdata.name)
    console.log(menudata);
    return (resdata.length==0)? <Shimmer/> :
    (  
        <div >
            <div className="rest">
            <h1>{resdata.name}</h1>
            <h2> {resdata.locality}</h2>
            </div>
            <div>
               { menudata.map(item=> (<Menu items={item} />)) }
            </div>
        </div>
    )
}

 export default RestaurantMenu;
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
let headerdata={};
let menudata=[];
const useRestaurantmenu=()=>{
  let dat=[];
  const  [resdata, setresData]=useState([]);
  const [accordata,setaccordata]=useState([]);
 //   [key, setKey]=useState('');
    const {resid} =useParams();
    useEffect(  ()=>{
    fetchData();
    //console.log(res);
    // return res;
    return (console.log('un mount'))
    },[resid]) //dependecy array once means ueeffect calls once when component renders and useeffect takes call abck func tion and dependency array 

    const fetchData= async ()=>{
         const data= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8579593&lng=74.8404784&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
         const response= await data.json();
          headerdata= response.data.cards[2].card.card.info;
          menudata=response.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
         const  accdata= response.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
          console.log(response.data)
         console.log(headerdata);
          console.log(menudata);
          setresData(headerdata);
          //data.resdata=resdata;
          //data.menudata=menudata
          accdata.map(item=>{
            if(item.card.card['@type']=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'){
             //const {title, itemCards}=data.card.card;
             dat=[...dat,item];
             
            }
            return
           })
           setaccordata(dat);
          console.log(data);
         return
    }

    return [resdata,menudata,accordata]
}

    //console.log(headerdata.name)
   // console.log(menudata);
   export default useRestaurantmenu
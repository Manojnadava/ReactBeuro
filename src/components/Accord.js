import { useState } from "react";
import Menu from "./Menu";

const AccordItem=(props)=>{
    //const [showItem,setshowItem]=useState()
   // const [index,setIndex]=useState(null);
   console.log(props.showItem)
    const  activate =()=>{

    }
    const handleClick= ()=>{
        console.log('Clicked')
        //setshowItem(!showItem)
        setIndex(props.index)
    }
    console.log(props.items.itemCards);
    return (
        <div className="flex justify-center items-start">
            <div className="flex flex-col items-center justify-center w-6/12 bg-gray-200 border-b border-cyan-100 ">
               <div className="flex w-full items-center justify-between bg-gray-200 p-4  rounded-md cursor-pointer" onClick={props.onclick} >
               <span className="font-bold text-center">{props.items.title}</span>
               <span>🔽</span>
               </div>
               <div className="mt-3">
                { 
                  props.isOpen && props.items.itemCards.map((element) => {
                  return <Menu items={element} key={element.card.info.id}  content={'add'}/>
                })
                    }
               </div>
          </div>
        </div>
        
    )
}

export default  AccordItem;
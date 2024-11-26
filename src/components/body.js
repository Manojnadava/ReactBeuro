const { useEffect } = require('react');
const resData=require('../../data');
const CardItems=require('./CardItem');
const useState=require('react').useState;
const Shimmer=require('./shimmer');

let globalresp=[];
let offset;
let csrf;

//import {useStae} from 'react'; //this is for importing of named export




const Body=()=>{
    const [resDataa,setresDataa]= useState([]);
    const [search,setSearch]=useState('');
   // console.log("Rendering Body:", resDataa);

   useEffect(()=>{
    console.log('use effect called ');
    fetchData('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8579593&lng=74.8404784&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING','GET',null);
   },[])

   const fetchData= async (url,method='GET',reqparm=null,) =>{
    const options={
      method:method,
    }
    if(method==='POST'){
      options.headers={
       'Content-Type': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  'X-CSRF-Token': csrf,
      };
     options.body=JSON.stringify(reqparm);
    }
     const data=  await fetch(url,options);
     const resp= await  data.json();
     //globalresp=resp.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards.slice(1,41);
     //console.log('Live data'+ JSON.stringify(resp))
    // item=globalresp.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
    // console.log(globalresp)
    if(globalresp.length==0){
      globalresp=resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants ;
      offset=resp.data.pageOffset.nextOffset;
      csrf=resp.csrfToken;
      console.log('csrf'+ csrf)
    }
    else {
      globalresp=[...globalresp,resp.data.cards[4].card.card.gridElements.infoWithStyle.restaurants] ;
    }
   
     setresDataa(globalresp);
    
  
   }

  //  const fetchhData= async () =>{
  //   const data=  await fetch('https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.8579593&lng=74.8404784&str=Biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=75bf8ca2-c93f-a5d2-d633-e7db2ca593f1&selectedPLTab=RESTAURANT');
  //   const resp= await  data.json();
  //   globalresp=resp.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards.slice(1,41);
  //   //console.log('Live data'+ JSON.stringify(resp))
  //  // item=globalresp.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
  //   //console.log(globalresp)
  //   //setresDataa(globalresp);
  //   return globalresp;
 
  // }

  
   console.log('Body component loaded');
   return resDataa.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter"> 
                <button className="filter-button" 
                onClick={()=>{
                 let toprated=  resDataa.filter(item=>{
                     return item.card.card.info.avgRating > '3.7';
                  })
                  setresDataa(toprated);
                }}
                
                > Top rated restaurant </button>
                
                 <div>
                  <div>
                    <input className="Search" value={search} 
                    onInput={(e)=>{
                      setSearch(e.target.value);
                    }}
                     />
                    <button onClick={   ()=>{
                    // glob=  await fetchData();
                    console.log(search);
                     newres=  globalresp.filter((item)=>{
                      return item.card.card.info.name.toLowerCase().includes(search.toLowerCase());
                     })
                     if(newres.length==0){
                      newres=globalresp;
                     }
                     console.log(newres)

                     setresDataa(newres);
                    }}> Submit </button>
                  </div>
                 </div>
                 </div>
            <div className='item-container' onClick={(e)=>{
              const requestData = {
                lat: 12.8579593,
                lng: 74.8404784,
                nextOffset: "CJhlELQ4KIDIi4SRjLOyPDCnEzgC",
                page_type: "DESKTOP_WEB_LISTING",
                filters: {},
                seoParams: {
                  seoUrl: "https://www.swiggy.com/",
                  pageType: "FOOD_HOMEPAGE",
                  apiName: "FoodHomePage",
                },
                widgetOffset: {
                  NewListingView_category_bar_chicletranking_TwoRows: "",
                  NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
                  Restaurant_Group_WebView_SEO_PB_Theme: "",
                  collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
                  inlineFacetFilter: "",
                  restaurantCountWidget: "",
                },
              };
               
              fetchData('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/update','POST',requestData)
               
            }}>
           
            {
             resDataa.map(item=>{
              //const key =;
                return <CardItems item={item} key= {item.info.id}/>;
                
             })   
            
            }
           
           </div>


        </div>
    )
}

module.exports=Body;
//export default Body 
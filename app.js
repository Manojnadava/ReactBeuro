/* Html components req for food app
1.Header section
Logo 
Nav items

2. body
 search b utton
 Conatiner(items)
   Cards - contasins items info-rest name , price, couisne , rating

3.Footer
  Copyright
  address



*/
const resData=require('./data');

const styleCard={
    backgroundColor:"#7eadc0"
}
const Header=()=>{
    return (
        <div className="header">
            <div className='logo'>
                <img  className="img" src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
            </div>
            <div className="nav">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Conatct</li>
                <li>Cart</li>
              </ul>
            </div>

        </div>
    )
}
const CardItems=(prop)=>{
    console.log(prop);

    ///console.log(JSON.stringify(prop[2].card, null, 2));
   if ( prop.item.card.info.imageId==undefined){
    prop.item.card.info.imageId='';
    }
   const  {name,category,price,description,imageId}= prop.item.card.info;

   if(prop.item.card.info.imageId==''){
     path="https://c8.alamy.com/comp/2HBWP1Y/popular-india-food-mughlai-biryani-in-the-restaurant-2HBWP1Y.jpg";
   }
   else{
     path="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/"
   }

  return(
    <div className="item" style={styleCard}>
        <img className="itemimage" alt="item" src={path+imageId}/>
        <h3> {name}</h3>
        <h4> {description}</h4>
        <h4> {category.join(',')}</h4>
        
        <h4> {price}</h4>
 </div>
  )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search"> Search </div>
            <div className='item-container'>
           
            {
             resData.map(item=>{
              //const key =;
                return <CardItems item={item} key= {item.card.info.id}/>;
                
             })   
            
            }
           
           </div>


        </div>
    )
}

const AppLayout=()=>{
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}

const React=require('react');
const ReactDOM=require('react-dom/client') ;


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

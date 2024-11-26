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
const Header=require('./components/header');
const Body=require('./components/body');

const AppLayout=()=>{
  
    return (
        <div className="app">
            <Header />
            <Body />
            {console.log(<Body />)}

        </div>
    )
}

const React=require('react');
const ReactDOM=require('react-dom/client') ;


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

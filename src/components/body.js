const { useEffect, useContext } = require('react');
const resData=require('../../data');
import {CardItems,productLabel} from './CardItem'; // here productLabel is a just function which when we call will return a react componet or jsx fun
const useState=require('react').useState;
const Shimmer=require('./shimmer');
let link;
//const { Link } = require('react-router-dom');
import { Link } from 'react-router-dom';
import UserContext from '../util/UserContext';
import { itemCards } from '../../data';

let globalresp=[];


const Body = () => {
  const [resDataa, setResDataa] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const {loggedInUser,setUser}=useContext(UserContext);
  useEffect(() => {
    console.log('useEffect called with page:', page);
    fetchData(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8579593&lng=74.8404784&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
  }, [page]);

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setPage((prevPage) => prevPage + 1); // Increment the page
      }
    }

   

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('raw data ')
      console.log(data);
      const newRestaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];
      globalresp = [...globalresp, ...newRestaurants];
      //console.log(newRestaurants)
      setResDataa(globalresp);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('Body component loaded');

 // window.addEventListener('scroll', handleScroll);
 const EnhansedComp=productLabel(CardItems); // it will return a enhansed jsx comp
 
console.log('Returned')
  return resDataa.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="filter flex px-2 m-5">
        <button
          className="bg-[blue] px-0 mx-2 rounded-lg w-56"
          onClick={() => {
            const toprated = resDataa.filter((item) => item.info.avgRating > '4.4');
            setResDataa(toprated);
          }}
        >
          Top rated restaurant
        </button>
          <div>
            <input
              className="border-2 border-solid border-blue-50"
              data-testid='search'
              value={search}
              onInput={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const newres = globalresp.filter((item) =>
                  item.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setResDataa(newres.length > 0 ? newres : globalresp);
              }}
            >
              Submit
            </button>
          </div>
          <div className="border-2 border-solid border-blue-50">
            <input  value={loggedInUser} onInput={(e)=>{
              user=e.target.value;
              setUser(user);
            }}/>
          </div>
        
      </div>
      <div className=" flex flex-wrap justify-start items-center p-5 m-5 h-full overflow-y-scroll" onScroll={(e)=>{
        console.log('MPN');
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight - 40) {
          let pag=page;
          setPage(pag+1); // Increment the page
        }

      }}>
        
        {resDataa.map((item,index) => {
          console.log(item);
          const link=`/restaurants/${item.info.id}`;
          return(  // returning jsx
            <Link to={link} key={`${item.info.id}-${index}`}>
            { (item.info.avgRating>4.45) ?  <EnhansedComp item={item}  />: <CardItems item={item}  />}
             </Link> 
          )
        
        })}
      </div>
    </div>
  );
};

module.exports = Body;

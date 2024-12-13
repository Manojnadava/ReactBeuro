const { useEffect } = require('react');
const resData=require('../../data');
const CardItems=require('./CardItem');
const useState=require('react').useState;
const Shimmer=require('./shimmer');
let link;
//const { Link } = require('react-router-dom');
import { Link } from 'react-router-dom';

let globalresp=[];


const Body = () => {
  const [resDataa, setResDataa] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  
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
      const newRestaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];
      globalresp = [...globalresp, ...newRestaurants];
      setResDataa(globalresp);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('Body component loaded');

 // window.addEventListener('scroll', handleScroll);
 

  return resDataa.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const toprated = resDataa.filter((item) => item.card.card.info.avgRating > '3.7');
            setResDataa(toprated);
          }}
        >
          Top rated restaurant
        </button>

        <div>
          <div>
            <input
              className="Search"
              value={search}
              onInput={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const newres = globalresp.filter((item) =>
                  item.card.card.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setResDataa(newres.length > 0 ? newres : globalresp);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="item-container" onScroll={(e)=>{
        console.log('MPN');
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight - 40) {
          let pag=page;
          setPage(pag+1); // Increment the page
        }

      }}>
        
        {resDataa.map((item,index) => (
           link=`/restaurants/${item.info.id}`,
         <Link to={link} key={`${item.info.id}-${index}`}> <CardItems item={item}  /></Link> 
        ))}
      </div>
    </div>
  );
};

module.exports = Body;

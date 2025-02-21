//import React from "react";
import React from 'react';
export const Cart=()=> {
    const [activeIndex, setActiveIndex] = React.useState(null);
  
    return (
      <div>
        <button>Options</button>
        <div>
          {['Profile', 'Settings'].map((item, index) => (
            <a
              key={item}
              href="#"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                backgroundColor: activeIndex === index ? 'blue' : 'white',
                color: activeIndex === index ? 'white' : 'black',
                padding: '8px 16px',
                display: 'block',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
import { useState } from "react";

const user=(props) =>{
    const [count]=useState(0);
    return (
        <div className="user-info">
           <h2>{props.name}</h2>
           <h3>Location: Udpi</h3>
           <h4> Contact: manojnadava20@gnmail.com</h4>
        </div>
    )
}

export default user;
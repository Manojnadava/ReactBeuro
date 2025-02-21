const Contact=()=>{
    return (
        <div>
           <h1 className="font-bold p-2 m-3 text-slate-200"> Contacts Us page </h1> 
           <form>
            <input type="text" placeholder="Enter name " className="border border-slate-400 bg-slate-50 p-2 m-2 "/>
            <input type="text" placeholder="Enter Age " className="border border-slate-400 bg-slate-50 p-2 m-2"/>
            <button className="border border-slate-400 bg-slate-50 p-2 m-1 rounded-2xl ">Submit</button>
           </form>
        </div>
    )
}

export default Contact
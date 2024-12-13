import { useRouteError } from "react-router-dom";

export const Error=()=>{
    const err=useRouteError()// hooks are js fun
    console.log(err)
    return (
        <div>
            <h1> Oops Error</h1>
            <h2>404 Page Not Found</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
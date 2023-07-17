import { NavLink, Outlet } from "react-router-dom";

const User=()=>{
    return(
        <>
        <h2>I am in user</h2>
        <NavLink to="priyanka">Priyanka</NavLink>
        <NavLink to="shital">Shital</NavLink>
        <NavLink to="vaishnavi">Vaishnavi</NavLink>
        <Outlet/>
        </>
    );
}
export default User;

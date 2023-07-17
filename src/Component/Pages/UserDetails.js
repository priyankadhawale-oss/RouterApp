import { useParams } from "react-router-dom"

const UserDetails=()=>{
    const {name}=useParams();
    return(
        <>
        <h2>I am {name}.</h2>
        </>
    )
}
export default UserDetails;
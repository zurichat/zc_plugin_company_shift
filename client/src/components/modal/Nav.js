import { Link} from "react-router-dom"
const Nav = () => {
    return ( 
        <div>
            <ul>
                <li>
                    {/* <Link to="/">Home</Link> */}
                     <Link to="/createshift">Create Shift</Link>
                </li>

            </ul>
        </div>
     );
}
 
export default Nav;
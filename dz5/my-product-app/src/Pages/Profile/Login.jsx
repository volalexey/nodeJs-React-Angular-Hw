import {LogUser} from "../../components/User/logUser";
import { NavLink} from "react-router-dom";

export const Login = () =>{

    return (
        <div>
            <h1>Login</h1>
            <LogUser/>
            <p>dont have account? <NavLink to="/register">registration</NavLink>  </p>
        </div>

    )
}
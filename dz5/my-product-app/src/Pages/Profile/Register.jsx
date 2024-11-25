import {Link} from "react-router-dom";
import {RegUser} from "../../components/User/regUser";

export const Register = () =>{

    return (
        <div>
            <h1>Register</h1>
            <RegUser/>
            <p>already have account? <Link to="/login">login</Link>  </p>
        </div>

    )
}
import {useContext, useState} from "react";
import {UserContext} from "../../context/User/UserContext";
import {useNavigate} from "react-router-dom";

export const RegUser = () => {

    const[userUsername, setUserUsername] = useState("");
    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('');
    const {registerUser, user} = useContext(UserContext);
    const navigate = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const regUser = {
            username: userUsername,
            email: userEmail,
            password: userPassword,
        }

        await registerUser(regUser);

        if (user != null) {
            navigate('/');
        } else {
            alert('incorrect Data!')
        }
    }

    return (
        <div>
            <form action="" onSubmit={handlerSubmit}>
                <label htmlFor="inputUsername">Username</label>
                <input type="text" id={'inputUsername'} value={userUsername}
                       onChange={(e) => setUserUsername(e.target.value)}/>

                <label htmlFor="inputEmail">Email</label>
                <input type="text" id={'inputEmail'} value={userEmail}
                       onChange={(e) => setUserEmail(e.target.value)}/>

                <label htmlFor="inputPassword">Password</label>
                <input type="text" id={'inputPassword'} value={userPassword}
                       onChange={(e) => setUserPassword(e.target.value)}/>

                <button type={'submit'}>Add</button>
            </form>
        </div>
    )
}
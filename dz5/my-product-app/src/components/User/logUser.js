import {useContext, useState} from "react";
import {UserContext} from "../../context/User/UserContext";
import {useNavigate} from "react-router-dom";

export const LogUser = () => {

    const[userEmail, setUserEmail] = useState('');
    const[userPassword, setUserPassword] = useState('');
    const {authUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const logUser = {
            email: userEmail,
            password: userPassword,
        }

        const status = await authUser(logUser);

        if (status === 200) {
            navigate('/');
        }
    }

    return (
        <div>
            <form action="" onSubmit={handlerSubmit}>
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
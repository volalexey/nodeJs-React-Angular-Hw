import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/User/UserContext";

export const InfoUser = () => {
    const {user} = useContext(UserContext);
    const [actualUser, setActualUser] = useState(null);

    useEffect(() => {
        if(user) setActualUser(user.user);
        console.log(user);
    }, [user])

    if(actualUser){


        return(
            <div>
                <h1>Hello, {actualUser.username}</h1>
                <div>Username: {actualUser.username}</div>
                <div>Email: {actualUser.email}</div>
                <div>Registration Date: {actualUser.createdAt}</div>
                {actualUser.isAdmin ? (<div>Admin role!</div>) : null}
                <div>
                    <p>Options</p>
                    <div>Send messages: {actualUser.sendMessages ? (<span>On</span>) : (<span>Off</span>)}</div>
                </div>
            </div>
        )
    }
}
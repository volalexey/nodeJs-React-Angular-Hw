import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (user && user.username) {
            fetchData(user.username);
        }
    }, []);

    const fetchData = async (username) => {
        if (!username) {
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/user/${username}`);
            //console.log("Fetched data:", response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const authUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                email: user.email,
                password: user.password,
            });
            setUser(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.status;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const registerUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:8080/user/register', {
                email: user.email,
                password: user.password,
                username: user.username,
            });
            setUser(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, authUser, registerUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

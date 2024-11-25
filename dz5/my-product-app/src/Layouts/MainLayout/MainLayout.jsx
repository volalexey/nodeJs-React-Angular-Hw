import { UserContext } from "../../context/User/UserContext";
import {useContext} from "react";
import {NavLink, Outlet} from "react-router-dom";

const MainLayout = () => {

    const {user, logoutUser} = useContext(UserContext);
    console.log(user);
        return (

            <div>
                <header>
                    {user ?

                        (<div>
                            <div>
                                Welcome, {user.user.username }
                                <button onClick={() => logoutUser()}>logout</button>
                            </div>
                            <NavLink to='/profile'>Profile</NavLink>
                        </div>)
                        :
                        <div>
                            <NavLink to='/login'>Login</NavLink>
                        </div>}
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/reviews'>Reviews</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </header>
                <main style={{border: '2px solid black', borderRadius: '5px'}}>
                    <Outlet/>
                </main>
                <footer>
                    <div>some footer text</div>
                </footer>
            </div>
        )

}

export default MainLayout;
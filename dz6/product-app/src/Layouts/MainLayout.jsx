import {NavLink, Outlet} from "react-router-dom"
const MainLayout = () =>{
    return(
        <div className="main">
            <header className="header">
                <nav className="navbar">
                    <NavLink className="navbar-item" to="/">Home</NavLink>
                    <NavLink className="navbar-item" to="/products">Products</NavLink>
                    <NavLink className="navbar-item" to="/add">Add Product</NavLink>
                </nav>
            </header>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer">
                Site created by: Alexey Voloshyn 
            </footer>
        </div>
    )
}
export default MainLayout;
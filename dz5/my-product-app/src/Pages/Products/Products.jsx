import {ProductsProvider} from "../../context/Products/ProductsContext";
import {ListProducts} from "../../components/Products/listProducts";
import {NavLink} from "react-router-dom";
import {UserContext} from "../../context/User/UserContext";
import {useContext} from "react";
import AdminProducts from "../ManageProducts/Products/Products";

const Products = () => {
    const {user} = useContext(UserContext);
    return (
        <ProductsProvider>
            {user ? (
                user.user.isAdmin === false  ? (
                        <div>
                            <h1>Product list</h1>
                            <ListProducts/>
                        </div>
                    )
                    :
                    (
                        <AdminProducts />
                    )
            ) : <div>You must login!</div> }
            <NavLink to={'/'}>Home</NavLink>
        </ProductsProvider>

    )
}
export default Products;
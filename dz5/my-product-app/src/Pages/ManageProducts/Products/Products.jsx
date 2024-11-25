import {AdminListProducts} from "../../../components/Products/adminListProducts";
import {NavLink} from "react-router-dom";

const AdminProducts = () =>{
    return (
        <div>
            <h1>Admin products list</h1>
            <AdminListProducts/>
            <NavLink to='/product/new'>Add Product</NavLink>
        </div>
    )
}
export default AdminProducts;
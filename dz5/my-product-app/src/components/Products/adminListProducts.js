import {useContext} from "react";
import {ProductsContext, ProductsProvider} from "../../context/Products/ProductsContext";
import {useNavigate} from "react-router-dom";

export const AdminListProducts = () =>{

    const {products, removeProduct} = useContext(ProductsContext);
    const navigate = useNavigate();

    function handleDelete(id) {
        removeProduct(id);
    }

    function handleEdit(id) {
        navigate(`${id}/edit`);
    }

    return (
        <ProductsProvider>
            <table>
                <caption>Products list</caption>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>CategoryId</th>
                    <th>Delete</th>
                    <th>Edit</th>

                </tr>
                </thead>
                <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.categoryId}</td>
                            <td>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(product.id)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </ProductsProvider>
    )
}
import {useContext} from "react";
import {ProductsContext} from "../../context/Products/ProductsContext";

export const ListProducts = () =>{

    const {products} = useContext(ProductsContext)

    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>ProductName</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map(product =>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
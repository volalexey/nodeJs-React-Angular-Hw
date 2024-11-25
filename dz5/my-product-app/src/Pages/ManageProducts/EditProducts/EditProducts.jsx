import {EditProductForm} from "../../../components/Products/editProductForm";
import {useParams} from "react-router-dom";
import {ProductsProvider} from "../../../context/Products/ProductsContext";

const EditProducts = () => {
    const {id} = useParams();
    return (
        <ProductsProvider>
            <div>
                <h1>Editing product /ID/</h1>
                <EditProductForm id={id}/>
            </div>
        </ProductsProvider>
    )
}
export default EditProducts;
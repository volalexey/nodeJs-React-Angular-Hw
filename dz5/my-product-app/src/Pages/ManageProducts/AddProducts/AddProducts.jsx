import {AddProductForm} from "../../../components/Products/addProductForm";
import {ProductsProvider} from "../../../context/Products/ProductsContext";

const AddProducts = () => {
    return (
        <ProductsProvider>
            <div>
                <h1>Add product</h1>
                <AddProductForm></AddProductForm>
            </div>
        </ProductsProvider>
    )
}
export default AddProducts;
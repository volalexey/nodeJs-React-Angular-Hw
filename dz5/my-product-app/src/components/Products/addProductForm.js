import {useContext, useState} from "react";
import {ProductsContext} from "../../context/Products/ProductsContext";
import {useNavigate} from "react-router-dom";

export const AddProductForm = () => {

    const[productName, setProductName] = useState('');
    const[productPrice, setProductPrice] = useState(0);
    const[productDescription, setProductDescription] = useState('');
    const[productCategoryId, setProductCategoryId] = useState(0);
    const {addProduct} = useContext(ProductsContext);
    const navigate = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault();

        const newProduct = {
            name: productName,
            description: productDescription,
            price: productPrice,
            categoryId: productCategoryId
        }

        const status = await addProduct(newProduct);
        if(status === 201){
            navigate(-1);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handlerSubmit}>
                <label htmlFor="inputName">Name</label>
                <input type="text" id={'inputName'} value={productName}
                       onChange={(e) => setProductName(e.target.value)}/>

                <label htmlFor="inputPrice">Price</label>
                <input type="number" id={'inputPrice'} value={productPrice.toString()}
                       onChange={(e) => setProductPrice(parseInt(e.target.value))}/>

                <label htmlFor="inputDescription">Description</label>
                <input type="text" id={'inputDescription'} value={productDescription}
                       onChange={(e) => setProductDescription(e.target.value)}/>

                <label htmlFor="inputCategoryId">CategoryId</label>
                <input type="number" id={'inputCategoryId'} value={productCategoryId.toString()}
                       onChange={(e) => setProductCategoryId(parseInt(e.target.value))}/>

                <button type={'submit'}>Add</button>
            </form>
        </div>
    )
}
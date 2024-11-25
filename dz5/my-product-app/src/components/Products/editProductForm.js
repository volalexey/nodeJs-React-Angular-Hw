import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../context/Products/ProductsContext";

export const EditProductForm = ({id}) => {

    const {getById, updateProduct} = useContext(ProductsContext);


    const [product, setProduct] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productDescription, setProductDescription] = useState('');
    const [productCategoryId, setProductCategoryID] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getById(id);
                if (fetchedProduct) {
                    setProduct(fetchedProduct);
                    setProductName(fetchedProduct.name);
                    setProductPrice(fetchedProduct.price);
                    setProductDescription(fetchedProduct.description);
                    setProductCategoryID(fetchedProduct.categoryId);
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id, getById]);

    async function handlerSubmit() {
        const updatedProduct = {
            ...product,
            name: productName,
            price: productPrice,
            description: productDescription,
            categoryId: productCategoryId,
        };

        const status = await updateProduct(product.id, updatedProduct);
        console.log(status);
    }

    return (
        <form action="" onSubmit={handlerSubmit}>
            <label htmlFor="inputName">Name</label>
            <input type="text" id={'inputName'} value={productName}
                   onChange={(e) => setProductName(e.target.value)}/>

            <label htmlFor="inputPrice">Price</label>
            <input type="number" id={'inputPrice'} value={productPrice}
                   onChange={(e) => setProductPrice(parseInt(e.target.value))}/>

            <label htmlFor="inputDescription">Description</label>
            <input type="text" id={'inputDescription'} value={productDescription}
                   onChange={(e) => setProductDescription(e.target.value)}/>

            <label htmlFor="inputCategoryId">CategoryId</label>
            <input type="number" id={'inputCategoryId'} value={productCategoryId}
                   onChange={(e) => setProductCategoryID(parseInt(e.target.value))}/>

            <button type={'submit'}>Save</button>
        </form>
    )
}
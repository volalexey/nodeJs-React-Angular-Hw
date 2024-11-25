import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try{
            const response = await axios.get('http://localhost:8080/product');
            setProducts(response.data);
        }catch(error){
            console.log(error)
        }
    }

    const getById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/product/${id}`);
            return response.data;
        }catch (error) {
            console.error("Error fetching product by ID:", error);
            return null;
        }
    }

    const addProduct = async (product) => {
        try{
            const response = await axios.post('http://localhost:8080/product',
                {
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    categoryId: product.categoryId
                });
            setProducts([...products, response.data]);
            return response.status;
        }catch (e){
            console.log(e);
        }
    }

    const removeProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:8080/product/${productId}`);
            setProducts(products.filter(task => task.id !== productId));
        } catch (e){
            console.log(e);
        }
    }

    const updateProduct = async (productId, newProduct) => {
        const response = await axios.patch(`http://localhost:8080/product/${productId}`, newProduct);
        setProducts(products.map(product =>
            product.id === productId ? { ...product, ...newProduct } : product
        ));
        return response.status;
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return(
        <ProductsContext.Provider
            value={{products, addProduct, removeProduct, updateProduct, getById}}>
            {children}
        </ProductsContext.Provider>
    )
}
import { useSelector } from "react-redux"
import { useState } from "react";
import ProductItem from "./ProductItem";

const Products = () =>{
    const {products, categories} = useSelector((state)=>state.productReducer);
    const [category, setCategory] = useState('all');

    return(
        <div>
            <div className="title is-1 mt-6">Products</div>
            <div className="mt-2">Category</div>

            <div className="select">
                <select className="mb-3" onChange={e => setCategory(e.target.value)}>
                    <option value='all' key="0option" >all</option>
                    {categories.map(categ =>(
                        <option value={categ.name} key={categ.id}>{categ.name}</option>
                    ))}
                </select>
            </div>
            
            <ul>
                {products.map(product =>{
                    if(category === 'all' || category === product.category) return(
                    <li key={product.id}>
                        <ProductItem product={product}/>
                    </li>
                    )
                    return null
                })
                }
            </ul>
        </div>
    )
}

export default Products;
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteProduct } from "../Actions/productActions";



const ProductItem = ({product}) =>{
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteProduct(product.id));
    }

    return(
        <div className="box">
            <div className="content">
                <strong className="is-size-5">{product.name}</strong>
            </div>

            <div className="">
                <span className="tag">Category:</span>
                <span className="tag">{product.category}</span>
            </div>

            <div className="">
                <span className="tag">ID:</span>
                <span className="tag">{product.id}</span>
            </div>

            <div className="">
                <span className="tag">Cost:</span>
                <span className="tag">{product.cost}</span>
            </div>
            
            <div className="content">
                <span className="tag">Description:</span>
                <p>{product.description}</p>
            </div>

            <div className="">
                <button className="button is-danger" onClick={handleDelete}>
                 Delete
                </button>
                <NavLink className="button is-link" to={`edit/${product.id}`}>
                    Edit
                </NavLink>
            </div>
        </div>
    )
}
export default ProductItem;
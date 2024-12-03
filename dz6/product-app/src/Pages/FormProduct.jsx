import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addProduct, editProduct } from "../Actions/productActions";

const FormProduct = ({props}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {products,categories} = useSelector((state)=>state.productReducer)

    const {id} = useParams();
    const productForEdit = products.find(product => product.id === parseInt(id));
    
    const action = props;

    const [name, setName] = useState(productForEdit ? productForEdit.name : '');
    const [category, setCategory] = useState(productForEdit ? productForEdit.category : categories[0].name);
    const [cost, setCost] = useState(productForEdit ? productForEdit.cost : 0);
    const [description, setDescription] = useState(productForEdit ? productForEdit.description : '');

    const handleSubmit = (e) =>{
        e.preventDefault();

        switch(action){
            case 'add':
                const newId = products[products.length-1].id + 1;
                console.log(products[products.length-1])
                dispatch(addProduct({name, cost, category, id: newId}));
                break;
            case 'edit':
                dispatch(editProduct({name, cost, category, id: productForEdit.id}));
                break;
            default:
                return;
        }

        navigate("/products");
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label className="label mt-3" htmlFor="name">Name</label>
            <input className="input is-normal" placeholder="Name" type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>

            <label className="label mt-3" htmlFor="category">Category</label>
            <div className="select">
                <select className="" name="category" id="category" onChange={e => setCategory(e.target.value)}>
                    {categories.map(categ =>(
                        <option value={categ.name} key={categ.id}>{categ.name}</option>
                    ))}
                </select>
            </div>
            

            <label className="label mt-3" htmlFor="cost">Cost</label>
            <input className="input is-normal" placeholder="Cost" type="number" id="cost" value={cost} onChange={e => setCost(e.target.value)}/>

            <label className="label mt-3" htmlFor="description">Description</label>
            <input className="input is-normal" placeholder="Description" type="description" id="description" value={description} onChange={e => setDescription(e.target.value)}/>

            <button className="button m-5" type="submit">Submit</button>
        </form>
    )
}

export default FormProduct;
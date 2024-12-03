const initialState = {
    products:[
        {
            id: 1,
            name: "Apple",
            category: "products",
            cost: 30,
            description: "Box of red apples"
        },
        {
            id: 2,
            name: "Phone",
            category: "electronics",
            cost: 99000,
            description: "Redmi Apple 15 PRO Mini"
        },
        {
            id: 3,
            name: "Green tea",
            category: "products",
            cost: 300,
            description: "Green tea from Japan"
        },
    ],
    categories:[
        {name: "electronics", id: 1},
        {name: "cloth", id: 2},
        {name: "products", id: 3},
    ]
        
}

const productReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return {...state, products: [...state.products, action.payload]};
        case 'DELETE_PRODUCT':
            return {...state, products: state.products.filter(product => product.id !== action.payload)};
        case 'EDIT_PRODUCT':
            return {...state, products: state.products.map((product) =>{
                return product.id === action.payload.id ? action.payload : product;
            })};
        default:
            return state;
    }
}

export default productReducer;
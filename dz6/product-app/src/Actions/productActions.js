export const addProduct = (product) =>({
    type: 'ADD_PRODUCT',
    payload: product
});
export const deleteProduct = (id) =>({
    type: 'DELETE_PRODUCT',
    payload: id
});
export const editProduct = (updatedProduct) =>({
    type: 'EDIT_PRODUCT',
    payload: updatedProduct
});
/*import { productActions } from "../reducers/productSlice";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/KANGJIYEON2/database/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    //dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
    dispatch(productActions.getAllproducts({ data }));
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/KANGJIYEON2/database/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}
export const productAction = { getProductDetail };
*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoaing: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/KANGJIYEON2/database/products?q=${searchQuery}`;
      let res = await fetch(url);
      return await res.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchProductsDetail = createAsyncThunk(
  "product/fetchDetail",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/KANGJIYEON2/database/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getSingleProduct(state, action) {
      state.productList = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoaing = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoaing = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoaing = false;
        state.error = action.payload;
      })
      .addCase(fetchProductsDetail.pending, (state) => {
        state.isLoaing = true;
      })
      .addCase(fetchProductsDetail.fulfilled, (state, action) => {
        state.isLoaing = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductsDetail.rejected, (state, action) => {
        state.isLoaing = false;
        state.error = action.payload;
      });
  },
});
export const productActions = productSlice.actions;
export default productSlice.reducer;

/*
function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return { ...state, selectedItem: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;
*/
